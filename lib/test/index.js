"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const VdsRPC_1 = require("../VdsRPC");
exports.rpcURL = process.env.VdsRPC || "http://vds:test@localhost:3889";
exports.rpc = new VdsRPC_1.VdsRPC(exports.rpcURL);
exports.repoData = require("../../solar.development.json");
async function generateBlock(n = 1) {
    return exports.rpc.rawCall("generate", [n]);
}
exports.generateBlock = generateBlock;
async function assertThrow(fn, msg, report) {
    let errorThrown = null;
    try {
        await fn();
    }
    catch (err) {
        errorThrown = err;
    }
    // assert.erro
    if (errorThrown && report) {
        report(errorThrown);
    }
    chai_1.assert(errorThrown != null, msg ? `Expects error to be thrown: ${msg}` : "Expects error to be thrown");
    // assert.isNotNull(errorThrown, )
}
exports.assertThrow = assertThrow;
