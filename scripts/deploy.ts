import { ethers } from "hardhat";

async function main() {

  const Task= await ethers.getContractFactory(
    "taskTracker"
  );
  const tsk= await Task.deploy();
  await tsk.deployed();

  console.log("tsk deployed to: ", tsk.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });