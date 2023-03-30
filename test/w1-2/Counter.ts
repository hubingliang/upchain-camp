import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Owner call addCount", async function () {
      const { counter, owner } = await loadFixture(deployOneYearLockFixture);
      await counter.connect(owner).addCount(10);
      expect(await counter.count()).to.equal(10);
    });
    it("Other account call addCount", async function () {
      const { counter, otherAccount } = await loadFixture(deployOneYearLockFixture);

      await expect(counter.connect(otherAccount).addCount(10)).to.be.revertedWith("Not allow");
    });
  });
});
