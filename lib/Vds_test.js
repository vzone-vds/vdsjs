"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const test_1 = require("./test");
const Vds_1 = require("./Vds");
const Contract_1 = require("./Contract");
describe("Vds", () => {
    const vds = new Vds_1.Vds(test_1.rpcURL, test_1.repoData);
    it("can instantiate a contract", () => {
        const contract = vds.contract("test/contracts/Methods.sol");
        chai_1.assert.instanceOf(contract, Contract_1.Contract);
    });
    it("throws an error if contract is not known", () => {
        // assertThrow
        chai_1.assert.throw(() => {
            vds.contract("test/contracts/Unknown.sol");
        });
    });
});
