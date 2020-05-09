"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VdsRPC_1 = require("./VdsRPC");
const ContractsRepo_1 = require("./ContractsRepo");
/**
 * The `Qtum` class is an instance of the `vdsjs` API.
 *
 * @param providerURL URL of the qtumd RPC service.
 * @param repoData Information about Solidity contracts.
 */
class Vds extends VdsRPC_1.VdsRPC {
    constructor(providerURL, repoData) {
        super(providerURL);
        this.repo = new ContractsRepo_1.ContractsRepo(this, Object.assign({ 
            // massage the repoData by providing empty default properties
            contracts: {}, libraries: {}, related: {} }, repoData));
    }
    /**
     * A factory method to instantiate a `Contract` instance using the ABI
     * definitions and address found in `repoData`. The Contract instance is
     * configured with an event log decoder that can decode all known event types
     * found in `repoData`.
     *
     * @param name The name of a deployed contract
     */
    contract(name) {
        return this.repo.contract(name);
    }
}
exports.Vds = Vds;
