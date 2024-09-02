import { ActorSubclass } from "@dfinity/agent";
import { Wallet } from '../../types';
import { ICRC1_IDL } from '../did';
import { unwrapResult } from "../utils/resultHelper";

export class BaseAdapter implements Wallet.AdapterInterface {
    public url: string;

    constructor(url: string) { 
        this.url = url;
    }

    async isAvailable(): Promise<boolean> {
        throw new Error("Not implemented");
    }

    async connect(config: Wallet.AdapterConfig): Promise<Wallet.Account> {
        throw new Error("Not implemented");
    }

    async disconnect(): Promise<void> {
        throw new Error("Not implemented");
    }

    async getBalance(): Promise<bigint> {
        throw new Error("Not implemented");
    }

    async createActor(canisterId: string, idl: any): Promise<ActorSubclass<any>> {
        throw new Error("Not implemented");
    }

    async getAccountId(): Promise<string | boolean> {
        throw new Error("Not implemented");
    }

    async getPrincipal(): Promise<string | boolean> {
        throw new Error("Not implemented");
    }

    async whoAmI(): Promise<string> {
        throw new Error("Not implemented");
    }

    async isConnected(): Promise<boolean | undefined> {
        throw new Error("Not implemented");
    }

    async transfer(params: Wallet.TransferParams, canisterId?: string): Promise<bigint> {
        const actor = await this.createActor(
          canisterId || "ryjl3-tyaaa-aaaaa-aaaba-cai", // Defaults to NNS canister
          ICRC1_IDL,
        );
    
  
          const transferResult = await actor.icrc1_transfer(params);
    
          const blockheight: bigint = await unwrapResult(transferResult);
    
          return blockheight;
      }
}