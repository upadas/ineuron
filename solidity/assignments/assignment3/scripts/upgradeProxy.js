const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x5Fc57ba8F0CB83b8A34a0277d7E830e626b3e595";

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + (await upgraded.owner()));
  console.log("Implementation contract address: " + implementationAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
