const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20TokenV1 = await ethers.getContractFactory("ERC20TokenV1");
  const erc20TokenV1 = await upgrades.deployProxy(ERC20TokenV1, [1000000]);
  await erc20TokenV1.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    erc20TokenV1.address
  );

  console.log(
    "ERC20TokenV1 contract deployed at address: " + erc20TokenV1.address
  );
  console.log(
    "implementation contract deployed at address: " + implementationAddress
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// const DAITokenAddress = "0xfA36653d85B3A7D06Cd5d83e4d03667b36b44B7a";
// const LINKTokenAddress = "0x9FA894F65353cC2b4feCeA717B998a88a4641255";
// const USDCTokenAddress = "0xacEc0F50978654652d089E4e7016D9682a3b27CD";
// const AddressToTokenMapAddress = "0xf97B39B690C56aA9442126Fc35781efEb0244B69";
// const LendingConfigAddress = "0xcd90133a0d3d962B38650A3983C85a866e21FA8b";
// const LendingHelperAddress = "0x15D9850C486DA40311307A5722C2f9cCDd7fEfb7";
// const LendingPoolAddress = "0xEAEF7504060c6e1CB2982dd3CAA94aD275015971";

// const DAITokenAddress = "0xF2e2C8A502657c37ad4d37F2BefaBEb308315152";
// const LINKTokenAddress = "0x05332eF900c3B926ED013F66b64A85646Fd82092";
// const USDCTokenAddress = "0x9603ed1F72C87d33d48a5e3A4A0915235BA46cFe";
// const AddressToTokenMapAddress = "0x9Db7F3e9aeee7577a9CBb32378d28eB19347D50E";
// const LendingConfigAddress = "0xDcd209294e7605D3123C3C2A5Da58Ce525C0E3DC";
// const LendingHelperAddress = "0x5620bE39D5B89C5D8Ece7E1509B5eC5B6927Da98";
// const LendingPoolAddress = "0xF5D9C5C8073D700696773bE0cD67FDfAaA9A8bD0";
