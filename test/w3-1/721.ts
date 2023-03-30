import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Nft = await ethers.getContractFactory("BrianHuItem");
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
