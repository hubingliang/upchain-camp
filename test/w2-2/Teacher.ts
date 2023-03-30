import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import abi from "../../artifacts/contracts/w2-2/Score.sol/Score.json";
describe("Teacher", function () {
  async function deployOneYearLockFixture() {
    const [owner, student1, student2] = await ethers.getSigners();
    const Teacher = await ethers.getContractFactory("Teacher");
    const teacher = await Teacher.deploy();

    return { teacher, owner, student1, student2 };
  }

  describe("Deployment", function () {
    it("update score over limit", async function () {
      const { teacher, student1, student2 } = await loadFixture(
        deployOneYearLockFixture
      );
      await teacher.updateScore(student1.address, 100);
      expect(teacher.updateScore(student1.address, 101)).to.be.revertedWith(
        "scoreOverLimit"
      );
    });
  });
});
