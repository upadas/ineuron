import React from "react";
import { useWeb3Contract } from "react-moralis";
import StakingAbi from "../constants/Staking.json";
import TokenAbi from "../constants/RewardToken.json";
import { Form } from "web3uikit";
import { ethers } from "ethers";

function ClaimReward() {
  const stakingAddress = "0x286494cE5D717923183491e2F6c9b8564DFb92e8";
  const tesTokenAddress = "0x9b442e45e422c18eB43FFA9a4b51767aaDeE83A5";

  const { runContractFunction } = useWeb3Contract();

  let claimOptions = {
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "claimReward",
  };

  async function handleClaimRewardSubmit(data) {
    // console.log("Inside handleClaimRewardSubmit");
    // console.log("claimOptions" + JSON.stringify(claimOptions));

    const tx = await runContractFunction({
      params: claimOptions,
      onError: (error) => console.log(error),
    });

    await tx.wait(0);
    console.log("Stake transaction complete");
  }

  return (
    <div className="text-black">
      <Form
        title="Claim Reward!"
        buttonConfig={{
          onClick: function onClick(e) {
            return e.preventDefault;
          },
          theme: "primary",
          text: "Submit",
        }}
        data={[]}
        onSubmit={handleClaimRewardSubmit}
      ></Form>
    </div>
  );
}

export default ClaimReward;

/*
The tx.wait(0) function is used to wait for a transaction to be mined on the 
blockchain and for the transaction receipt to be returned. The function takes in 
one argument, which is the number of blocks to wait for before considering the 
transaction as confirmed. By passing in 0 as the argument, the function should return 
immediately with the transaction receipt without waiting for any blocks to be mined.

However if tx.wait(0) is not resolving, it could have a few causes:

* The transaction receipt is not yet available, it may take some time for it to be mined and added to the blockchain.
* There may be an issue with the network connection, which could be causing the function to time out.
* There may be an issue with the smart contract method that was called, causing the transaction to fail and not return a receipt.
* The smart contract may not be able to execute the requested function.

It's recommended to check for the transaction receipt status, gas used and gas price, 
and check if the contract has enough balance and check if the contract is able to 
execute the requested function.

It's also good to handle the error in the callback function passed in onError and also 
check for the error in the returned tx variable.
*/
