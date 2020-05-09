import "mocha"

import { assert } from "chai"

import { rpcURL, repoData } from "./test"
import { Vds } from "./Vds"
import { Contract } from "./Contract"

describe("Vds", () => {
  const vds = new Vds(rpcURL, repoData)

  it("can instantiate a contract", () => {
    const contract = vds.contract("test/contracts/Methods.sol")
    assert.instanceOf(contract, Contract)
  })

  it("throws an error if contract is not known", () => {
    // assertThrow
    assert.throw(() => {
        vds.contract("test/contracts/Unknown.sol")
    })
  })
})
