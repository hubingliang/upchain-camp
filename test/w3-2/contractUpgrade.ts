import { ethers } from "hardhat";

describe("Contract Upgrade", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Nft = await ethers.getContractFactory("Counter");
    const nft = await Nft.deploy();

    return { nft, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      // const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);
      // expect(await lock.unl/ockTime()).to.equal(unlockTime);
    });
  });
});
