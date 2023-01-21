import React from "react";
import { useWeb3Contract } from "react-moralis";
import StakingAbi from "../constants/Staking.json";
import TokenAbi from "../constants/RewardToken.json";
import { Form } from "web3uikit";
import { ethers } from "ethers";

function withdrawTokens() {
  const stakingAddress = "0x286494cE5D717923183491e2F6c9b8564DFb92e8";
  const tesTokenAddress = "0x9b442e45e422c18eB43FFA9a4b51767aaDeE83A5";

  const { runContractFunction } = useWeb3Contract();

  let approveOptions = {
    abi: TokenAbi.abi,
    contractAddress: tesTokenAddress,
    functionName: "approve",
  };

  let withdrawOptions = {
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "withdraw",
  };

  async function handleWithdrawSubmit(data) {
    const withdrawAmount = data.data[0].inputResult;
    approveOptions.params = {
      amount: ethers.utils.parseEther(withdrawAmount, "ether"),
      spender: stakingAddress,
    };

    const tx = await runContractFunction({
      params: approveOptions,
      onError: (error) => console.log(error),
      onSuccess: () => {
        handleApproveSuccess(approveOptions.params.amount);
      },
    });

    async function handleApproveSuccess(withdrawAmount) {
      withdrawOptions.params = {
        amount: withdrawAmount,
      };

      const tx = await runContractFunction({
        params: withdrawOptions,
        onError: (error) => console.log(error),
      });

      await tx.wait(0);
      console.log("Withdraw transaction complete");
    }
  }

  return (
    <div className="text-black">
      <Form
        onSubmit={handleWithdrawSubmit}
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
            name: "Enter Withdraw Amount",
            type: "number",
            value: "",
            key: "withdrawAmount",
          },
        ]}
        title="Withdraw!"
      ></Form>
    </div>
  );
}

export default withdrawTokens;
