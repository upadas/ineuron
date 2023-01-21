import React, { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import StakingAbi from "../constants/Staking.json";
import TokenAbi from "../constants/RewardToken.json";

function StakeDetails() {
  const { account, isWeb3Enabled } = useMoralis();
  const [rtBalance, setRtBalance] = useState("0");
  const [stakedBalance, setStakedBalance] = useState("0");
  const [earnedBalance, setEarnedBalance] = useState("0");

  const stakingAddress = "0x286494cE5D717923183491e2F6c9b8564DFb92e8";
  const rewardTokenAddress = "0x9b442e45e422c18eB43FFA9a4b51767aaDeE83A5";

  const { runContractFunction: getRTBalance } = useWeb3Contract({
    abi: TokenAbi.abi,
    contractAddress: rewardTokenAddress,
    functionName: "balanceOf",
    params: {
      account,
    },
  });

  const { runContractFunction: getStakedBalance } = useWeb3Contract({
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "getStaked",
    params: {
      account,
    },
  });

  const { runContractFunction: getEarnedBalance } = useWeb3Contract({
    abi: StakingAbi.abi,
    contractAddress: stakingAddress,
    functionName: "earned",
    params: {
      account,
    },
  });

  useEffect(() => {
    // Set Initial Earned Balance so that the screen does not go back to 0.00
    getEarnedBalance({
      onError: (error) => console.log(error),
    }).toString();
    setEarnedBalance(earnedBalance);

    async function updateEarnedBal() {
      const earnedBalance = (
        await getEarnedBalance({ onError: (error) => console.log(error) })
      ).toString();
      setEarnedBalance(earnedBalance);
    }

    async function updateRTAndStakedValues() {
      const rtBalance = (
        await getRTBalance({ onError: (error) => console.log(error) })
      ).toString();
      const formattedRtBalance = parseFloat(rtBalance) / 1e18;
      const formattedRtBalanceRounded = formattedRtBalance.toFixed(2);
      setRtBalance(formattedRtBalanceRounded);

      const stakedBalance = (
        await getStakedBalance({ onError: (error) => console.log(error) })
      ).toString();
      const formattedStakedBalance = parseFloat(stakedBalance) / 1e18;
      const formattedStakedBalanceRounded = formattedStakedBalance.toFixed(2);
      setStakedBalance(formattedStakedBalanceRounded);
    }

    if (isWeb3Enabled) {
      updateRTAndStakedValues();
      const interval = setInterval(() => {
        updateEarnedBal();
      }, 5000); //TODO: You could potentially have 12000 here and use a constant but leaving it her for now
      return () => clearInterval(interval);
    }
  }, [
    account,
    getEarnedBalance,
    getRTBalance,
    getStakedBalance,
    isWeb3Enabled,
  ]);

  return (
    <div className="p-3" style={{ width: "40%" }}>
      <div className="font-bold m-2">Account : {account}</div>
      <div className="font-bold m-2">RT Balance is : {rtBalance}</div>
      <div className="font-bold m-2">Earned Balance is : {earnedBalance}</div>
      <div className="font-bold m-2">Staked Balance is : {stakedBalance}</div>
    </div>
  );
}

export default StakeDetails;
