import { VdsRPC } from "../VdsRPC";
export declare const rpcURL: string;
export declare const rpc: VdsRPC;
export declare const repoData: any;
export declare function generateBlock(n?: number): Promise<any>;
export declare function assertThrow(fn: () => Promise<any>, msg?: string, report?: (err: any) => void): Promise<void>;
