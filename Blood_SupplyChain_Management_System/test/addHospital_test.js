const { expect } = require("chai");
const hre = require("hardhat");

describe("addHospital function checking...", () => {
    beforeEach(async () => {
        [addr1, addr2, addr3] = await hre.ethers.getSigners();
        instanceContract = await hre.ethers.getContractFactory("BloodSupply");
        deployedContract = await instanceContract.deploy();
        await deployedContract.addHospital(addr2.address, "Norvic Hospital");
        await deployedContract.addHospital(addr3.address, "Bir Hospital");
    });

    it("Should add the Hospitals.. ", async () => {
        hospitalList = await deployedContract.getDataOfHospitals();
        expect(hospitalList[0].hospital_address).is.equal(addr2.address);
        expect(hospitalList[0].hospital_name).is.equal("Norvic Hospital");

        expect(hospitalList[1].hospital_address).is.equal(addr3.address);
        expect(hospitalList[1].hospital_name).is.equal("Bir Hospital")

    });
});
