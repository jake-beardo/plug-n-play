import { HttpAgent, ActorSubclass } from '@dfinity/agent';
import { Wallet } from '../../types';
export declare class NFIDAdapter implements Wallet.AdapterInterface {
    name: string;
    logo: string;
    readyState: string;
    url: string;
    private authClient;
    private agent;
    constructor();
    private principalId?;
    isAvailable(): Promise<boolean>;
    connect(config: Wallet.AdapterConfig): Promise<Wallet.Account>;
    disconnect(): Promise<void>;
    createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>>;
    createAgent(host: string): Promise<HttpAgent>;
    getAccountId(): Promise<string | boolean>;
    getPrincipal(): Promise<string>;
    getBalance(): Promise<bigint>;
    transfer(params: Wallet.TransferParams): Promise<void>;
    whoAmI(): Promise<string>;
    isConnected(): Promise<boolean | undefined>;
}
