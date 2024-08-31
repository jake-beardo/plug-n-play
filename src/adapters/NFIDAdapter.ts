import { Actor, HttpAgent, ActorSubclass } from "@dfinity/agent";
import { getAccountIdentifier } from "../utils/identifierUtils.js";
import { AuthClient, IdbStorage } from "@dfinity/auth-client";
import { Wallet } from '../../types';



const APPLICATION_NAME = "MicroDAO";
const APPLICATION_LOGO_URL = "TODO";
const APP_META = `applicationName=${APPLICATION_NAME}&applicationLogo=${APPLICATION_LOGO_URL}`;
const AUTH_PATH = `/authenticate/?${APP_META}#authorize`;
const NFID_ORIGIN = "https://nfid.one";
const NFID_AUTH_URL = NFID_ORIGIN + AUTH_PATH;

const NFID_LOGIN_CONFIG = {
  windowOpenerFeatures:
    `left=${window.screen.width / 2 - 525 / 2}, ` +
    `top=${window.screen.height / 2 - 705 / 2},` +
    `toolbar=0,location=0,menubar=0,width=525,height=705`,
};


export class NFIDAdapter implements Wallet.AdapterInterface {
  name: string;
  logo: string;
  readyState: string;
  url: string;
  private authClient: AuthClient | null;
  private agent: HttpAgent | null;

  constructor() {
    this.name = "NFID";
    this.logo = "path_to_nns_logo.svg";
    this.readyState = "Loadable";
    this.url = "https://nfid.one";
    this.authClient = null;
    this.agent = null;
  }

  private principalId?: string;

  async isAvailable(): Promise<boolean> {
    if (!this.authClient) {
      this.authClient = await AuthClient.create({
        storage: new IdbStorage(),
        idleOptions: {
          idleTimeout: 30 * 24 * 60 * 60 * 1000,
          disableIdle: true,
          disableDefaultIdleCallback: true,
        },
      });
    }
    return true;
  }

  async connect(config: Wallet.AdapterConfig): Promise<Wallet.Account> {
    if (!this.authClient) {
      this.authClient = await AuthClient.create({
        storage: new IdbStorage(),
        idleOptions: {
          idleTimeout: 30 * 24 * 60 * 60 * 1000,
          disableIdle: true,
          disableDefaultIdleCallback: true,
        },
      });
    }

    const isConnected = await this.isConnected();

    if (!isConnected) {
      await new Promise<void>((resolve, reject) => {
        this.authClient?.login({
          identityProvider: config.identityProvider || this.url,
          onSuccess: () => resolve(),
          onError: reject,
          maxTimeToLive: BigInt(Date.now() + 30 * 24 * 60 * 60 * 1e9), // 30 days in nanoseconds
          ...NFID_LOGIN_CONFIG,
        });
      });
    }
    const identity = this.authClient.getIdentity();
    this.principalId = identity.getPrincipal().toString();
    const host = config.host || this.url;
    this.agent = HttpAgent.createSync({
      identity,
      host,
    });
    // Fetch the root key in development mode
    if (this.url.includes("localhost") || this.url.includes("127.0.0.1")) {
      await this.agent.fetchRootKey();
    }

    return {
      accountId: getAccountIdentifier(this.principalId.toString()),
      principalId: this.principalId,
    };
  }


  async disconnect(): Promise<void> {
    if (this.authClient) {
      this.readyState = "Loadable";
      this.agent = null;
      await this.authClient.logout();
      this.authClient = null;
    }
  }

  async createActor<T>(canisterId: string, idl: any): Promise<ActorSubclass<T>> {
    if (!canisterId || !idl) {
      throw new Error("Canister ID and Interface Factory are required");
    }

    if (!this.agent) {
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    }

    return Actor.createActor(idl, { agent: this.agent, canisterId });
  }

  async createAgent(host: string): Promise<HttpAgent> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    const agent = HttpAgent.createSync({ identity, host });
    if (this.url.includes("localhost") || this.url.includes("127.0.0.1")) {
      await agent.fetchRootKey();
    }
    return agent;
  }

  async getAccountId(): Promise<string|boolean> {
    if (!this.authClient || !this.agent) {
      throw new Error("Wallet is not connected or initialized");
    }
    const identity = this.authClient.getIdentity();
    const principal = await identity.getPrincipal();
    return getAccountIdentifier(principal.toString());
  }

  async getPrincipal(): Promise<string> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    return identity.getPrincipal().toString();
  }

  async getBalance(): Promise<bigint> {
    throw new Error("Method not implemented.");
  }

  async transfer(params: Wallet.TransferParams): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async whoAmI(): Promise<string> {
    if (!this.authClient || !this.agent) {
      throw new Error("Wallet is not connected or initialized");
    }
    const identity = this.authClient.getIdentity();
    return identity.getPrincipal().toString();
  }

  async isConnected(): Promise<boolean|undefined> {
    return await this.authClient?.isAuthenticated();
  }
}