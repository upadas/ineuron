import React from "react";
import { useWeb3Contract } from "react-moralis";
import StakingAbi from "../constants/Staking.json";
import TokenAbi from "../constants/RewardToken.json";
import { Form } from "web3uikit";
import { ethers } from "ethers";

function StakeForm() {
  const stakingAddress = "0x286494cE5D717923183491e2F6c9b8564DFb92e8";
  const tesTokenAddress = "0x9b442e45e422c18eB43FFA9a4b51767aaDeE83A5";

  const { runContractFunction } = useWeb3Contract();

  let approveOptions = {
    abi: TokenAbi.abi,
    contractAddress: tesTokenAddress,
    functionName: "approve",
  };

  let stakeOptions = {
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "stake",
  };

  async function handleStakeSubmit(data) {
    const amountToApprove = data.data[0].inputResult;
    approveOptions.params = {
      amount: ethers.utils.parseEther(amountToApprove, "ether"),
      spender: stakingAddress,
    };

    const tx = await runContractFunction({
      params: approveOptions,
      onError: (error) => console.log(error),
      onSuccess: () => {
        handleApproveSuccess(approveOptions.params.amount);
      },
    });
  }

  async function handleApproveSuccess(amountToStakeFormatted) {
    stakeOptions.params = {
      amount: amountToStakeFormatted,
    };

    const tx = await runContractFunction({
      params: stakeOptions,
      onError: (error) => console.log(error),
    });

    await tx.wait(0);
    console.log("Stake transaction complete");
  }

  return (
    <div className="text-black">
      <Form
        onSubmit={handleStakeSubmit}
        buttonConfig={{
          onClick: function onClick(e) {
            return e.preventDefault;
          },
          theme: "primary",
          text: "Submit",
        }}
        data={[
          {
            inputWidth: "25%",
            name: "Enter Staking Amount",
            type: "number",
            value: "",
            key: "amountToStake",
          },
        ]}
        title="Stake Now!"
      ></Form>
    </div>
  );
}

export default StakeForm;
