import { HttpAgent, HttpAgentOptions } from '@dfinity/agent';
export { Wallet, ICRC } from '../../types';
export declare function createHttpAgent(options: HttpAgentOptions): HttpAgent;
export declare function fetchRootKey(agent: HttpAgent): Promise<void | ArrayBuffer>;
export declare function createAndSetupHttpAgent(options: HttpAgentOptions): Promise<HttpAgent>;
