import { EventEmitter } from "eventemitter3";
import { VdsRPC, IRPCWaitForLogsRequest, IPromiseCancel } from "./VdsRPC";
import { ContractLogDecoder } from "./abi";
import { IContractEventLogs, IContractEventLog } from "./Contract";
export declare type ICancelFunction = () => void;
export interface ICancellableEventEmitter extends EventEmitter {
    cancel: ICancelFunction;
}
export declare class EventListener {
    private rpc;
    private logDecoder;
    constructor(rpc: VdsRPC, logDecoder: ContractLogDecoder);
    /**
     * Get contract event logs. Long-poll wait if no log is found. Returns a cancel
     * function that stops the events subscription.
     *
     * @param req (optional) IRPCWaitForLogsRequest
     */
    waitLogs(req?: IRPCWaitForLogsRequest): IPromiseCancel<IContractEventLogs>;
    /**
     * Subscribe to contract's events, using callback interface.
     */
    onLog(fn: (entry: IContractEventLog) => void, opts?: IRPCWaitForLogsRequest): ICancelFunction;
    /**
     * Subscribe to contract's events, use EventsEmitter interface.
     */
    emitter(opts?: IRPCWaitForLogsRequest): ICancellableEventEmitter;
}
