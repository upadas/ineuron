const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
const { contract } = require("@openzeppelin/test-environment");

describe("MultiSigWallet Testing", function () {
  let numberOfConfirmationsRequired = 1;
  const amount = ethers.utils.parseEther("2");

  before(async () => {
    const contract = await ethers.getContractFactory("MultiSigWallet");
    accounts = await ethers.getSigners();
    owners = [accounts[0].address, accounts[1].address];
    multiSigContract = await contract.deploy(
      [accounts[0].address, accounts[1].address],
      numberOfConfirmationsRequired
    );
    await multiSigContract.deployed();
    // console.log(`the contract is deployed to : ${multiSigContract.address}`);
  });

  // 1
  it("MultiSigWallet Contract should have at least the same number of owners as the number of confirmations required", async () => {
    expect(
      (await multiSigContract.getOwners()).length
    ).to.be.greaterThanOrEqual(numberOfConfirmationsRequired);
  });

  // *************** Submitting ***************
  // 2
  it("Non-owners must not be able to submit a transaction", async () => {
    const multiSigContractInstance = await multiSigContract.connect(
      accounts[4]
    );
    await expect(
      multiSigContractInstance.submitTransaction(
        accounts[5].address,
        amount,
        0x121212
      )
    ).to.be.reverted;
  });

  // 3
  it("Owner must be able to submit a transaction, transaction count must increase", async () => {
    expect(await multiSigContract.getTransactionCount()).to.equal(0);
    // Submit a transaction to send Ether to accounts[5]
    // console.log(accounts[5]);
    await multiSigContract.submitTransaction(
      accounts[5].address,
      amount,
      0x1212
    );
    expect(await multiSigContract.getTransactionCount()).to.equal(1);
  });

  // *************** Confirming ***************

  // 4
  it("Non-Owners should not be able to confirm a transaction", async () => {
    const multiSigContractInstance = await multiSigContract.connect(
      accounts[5]
    );
    const txLength = await multiSigContractInstance.getTransactionCount();
    // console.log("txLength = " + txLength);
    await expect(multiSigContractInstance.confirmTransaction(txLength - 1)).to
      .be.reverted;
  });

  // 5
  it("Owner must be able to confirm Tx, Tx should exist before confirming and the number of confirmations should increase when transaction is confirmed", async () => {
    expect(await multiSigContract.getTransactionCount()).to.equal(1);
    expect((await multiSigContract.getTransactions(0))[4]).to.equal(0);
    // confirm the transaction that an owner submitted above in (3)
    await multiSigContract.confirmTransaction(0);
    expect((await multiSigContract.getTransactions(0))[4]).to.equal(1);
  });

  // 6
  it("Revert when an owner is trying to confirm an already confirmed transaction", async () => {
    //Check if the transaction 1 is already confirmed by the owner
    expect((await multiSigContract.getTransactions(0))[4]).to.equal(1);
    await expect(multiSigContract.confirmTransaction(0)).to.be.reverted;
  });

  // console.log("tx =" + JSON.stringify(ethers.utils.formatEther(tx[4])));

  // *************** Executing  ***************
  // 7
  it("Should deposit ETH into the Contract", async () => {
    const preDepositBal = await multiSigContract.getBalance();
    await multiSigContract.depositETH({ value: amount });
    expect(await multiSigContract.getBalance()).to.equal(
      preDepositBal.add(amount)
    );
  });

  // 8
  it("Non-owners should not be able to execute a transaction", async () => {
    const multiSigContractInstance = await multiSigContract.connect(
      accounts[4]
    );
    await expect(multiSigContractInstance.executeTransaction(0)).to.be.reverted;
  });

  // 9
  it("Transaction should exist and be confirmed before an owner executes a transaction", async () => {
    expect(await multiSigContract.getTransactionCount()).to.equal(1);
    expect(
      (await multiSigContract.getTransactions(0))[4]
    ).to.be.greaterThanOrEqual(numberOfConfirmationsRequired);
    await multiSigContract.executeTransaction(0);
  });

  // 10
  it("Revert when an owner is trying to execute an already executed transaction", async () => {
    expect(await multiSigContract.getTransactionCount()).to.equal(1);
    expect((await multiSigContract.getTransactions(0))[3]).to.be.true;
    await expect(multiSigContract.executeTransaction(0)).to.be.reverted;
  });

  // *************** Revoking ***************

  // Revoking
  // 11
  it("Non-owner should be not able to revoke a confirmation ", async () => {
    await multiSigContract.submitTransaction(accounts[6].address, amount, 0x12);
    expect(await multiSigContract.getTransactionCount()).to.equal(2);
    await multiSigContract.confirmTransaction(1);
    expect((await multiSigContract.getTransactions(1))[4]).to.equal(1);
    const multiSigContractInst = await multiSigContract.connect(accounts[5]);
    await expect(multiSigContractInst.revokeConfirmation(1)).to.be.reverted;
  });

  // 12
  it("Transaction must exist before an owner revokes a confirmation ", async () => {
    expect(await multiSigContract.getTransactionCount()).to.equal(2);
    expect((await multiSigContract.getTransactions(1))[4]).to.equal(1);
    await multiSigContract.revokeConfirmation(1);
  });

  // 13
  it("Owner should be not able to revoke a confirmation after execution ", async () => {
    expect(await multiSigContract.getTransactionCount()).to.equal(2);
    expect((await multiSigContract.getTransactions(0))[3]).to.be.true;
    await expect(multiSigContract.revokeConfirmation(0)).to.be.reverted;
  });

  /******** END OF TEST ************/
});
