import { VdsRPC } from "./VdsRPC";
import { IContractsRepoData } from "./ContractsRepo";
import { Contract } from "./Contract";
/**
 * The `Vds` class is an instance of the `vdsjs` API.
 *
 * @param providerURL URL of the vdsd RPC service.
 * @param repoData Information about Solidity contracts.
 */
export declare class Vds extends VdsRPC {
    private repo;
    constructor(providerURL: string, repoData?: IContractsRepoData);
    /**
     * A factory method to instantiate a `Contract` instance using the ABI
     * definitions and address found in `repoData`. The Contract instance is
     * configured with an event log decoder that can decode all known event types
     * found in `repoData`.
     *
     * @param name The name of a deployed contract
     */
    contract(name: string): Contract;
}
