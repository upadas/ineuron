const { ethers, network } = require("hardhat");
const { expect } = require("chai");

const SECONDS_IN_A_DAY = 86400;

async function moveBlocks(amount) {
  console.log("Moving Blocks in hardhat network");
  for (let i = 0; i < amount; i++) {
    await network.provider.send("evm_mine", []);
  }
  console.log(`Moved ${amount} blocks`);
}

async function moveTime(amount) {
  console.log("Moving forward in time to generate rewards");
  await network.provider.send("evm_increaseTime", [amount]);
  console.log(`Moved forward in time by ${amount} secs`);
}

describe("Staking Dapp Test", async function () {
  let staking;
  let rewardToken;
  let deployer;
  let stakeAmount;

  before(async function () {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    const _rewardToken = await ethers.getContractFactory("RewardToken");
    rewardToken = await _rewardToken.deploy();

    const _staking = await ethers.getContractFactory("Staking");
    staking = await _staking.deploy(rewardToken.address, rewardToken.address);

    stakeAmount = ethers.utils.parseEther("1");
  });

  it("should be able to stake tokens", async function () {
    await rewardToken.approve(staking.address, stakeAmount);
    await staking.stake(stakeAmount);

    const deployerAddress = deployer.getAddress();
    const startingEarned = await staking.earned(deployerAddress);

    console.log(`starting tokens earned in staking Dapp: ${startingEarned}`);
    await moveTime(SECONDS_IN_A_DAY);
    await moveBlocks(1);
    const endingEarned = await staking.earned(deployerAddress);
    console.log(`Total reward tokens earned after 24 hours : ${endingEarned}`);

    expect(startingEarned).to.be.equal(0);
    expect(endingEarned).to.be.equal(86400 * 100);
  });
});
