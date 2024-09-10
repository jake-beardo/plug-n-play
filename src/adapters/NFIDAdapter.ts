// src/adapters/NFIDAdapter.ts

import { Actor, HttpAgent, type ActorSubclass } from "@dfinity/agent";
import { getAccountIdentifier } from "../utils/identifierUtils.js";
import { AuthClient, IdbStorage } from "@dfinity/auth-client";
import { Wallet, Adapter } from "../types/index";
import { Principal } from "@dfinity/principal";
import { ICRC1_IDL } from "../did/icrc1.idl.js";
import { hexStringToUint8Array, principalToSubAccount } from "@dfinity/utils";

// const NFID_LOGIN_CONFIG = {
//   windowOpenerFeatures:
//     `left=${window.screen.width / 2 - 525 / 2}, ` +
//     `top=${window.screen.height / 2 - 705 / 2},` +
//     `toolbar=0,location=0,menubar=0,width=525,height=705`,
// };

export class NFIDAdapter implements Adapter.Interface {
  name: string;
  logo: string;
  readyState: string;
  url: string;
  wallets: Wallet.AdapterInfo[];
  private authClient: AuthClient | null;
  private agent: HttpAgent | null;

  constructor() {
    // Pass the `url` to the base class constructor
    this.name = "NFID";
    this.logo = "../../assets/nfid.svg";
    this.readyState = "Loadable";
    this.url = "https://nfid.one"; // Use the correct host in production
    this.authClient = null;
    this.agent = null;
  }
  state: Wallet.WalletState;
  icrc1Metadata(canisterId: string): Promise<any> {
    const actor = Actor.createActor(ICRC1_IDL, {
      agent: this.agent,
      canisterId,
    });
    return actor.icrc1_metadata();
  }
  async requestTransfer(params: Wallet.TransferParams) {
    // not possible with NFID
    throw new Error("Method not implemented.");
  }

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
  async connect(
    config: Wallet.AdapterConfig,
    applicationName: string = "DefaultAppName",
    applicationLogoUrl: string = "DefaultLogoUrl"
  ): Promise<Wallet.Account> {
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

    // Use default values if applicationName or applicationLogoUrl are not provided
    const APP_META = `applicationName=${encodeURIComponent(
      applicationName
    )}&applicationLogo=${encodeURIComponent(applicationLogoUrl)}`;
    const AUTH_PATH = `/authenticate/?${APP_META}#authorize`;
    const NFID_ORIGIN = "https://nfid.one";
    const NFID_AUTH_URL = NFID_ORIGIN + AUTH_PATH;

    const isConnected = await this.isConnected();

    if (!isConnected) {
      return new Promise<Wallet.Account>((resolve, reject) => {
        this.authClient?.login({
          identityProvider: NFID_AUTH_URL,
          onSuccess: async () => {
            try {
              const result = await this._continueLogin(config.host || this.url);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
          onError: (error) => {
            reject(new Error("Authentication failed: " + error));
          },
          maxTimeToLive: BigInt(Date.now() + 30 * 24 * 60 * 60 * 1e9), // 30 days in nanoseconds
        //   ...NFID_LOGIN_CONFIG,
        });
      });
    }
    return this._continueLogin(config.host || this.url);

  }

  private async _continueLogin(host: string): Promise<Wallet.Account> {
    try {
      const identity = this.authClient!.getIdentity();
      const principal = identity.getPrincipal();
      this.agent = HttpAgent.createSync({
        identity,
        host,
      });
      // Fetch the root key in development mode
      if (host.includes("localhost") || host.includes("127.0.0.1")) {
        await this.agent.fetchRootKey();
      }
      return {
        subaccount: principalToSubAccount(principal),
        owner: principal || null,
      };
    } catch (error) {
      console.error("Error during _continueLogin:", error);
      throw error;
    }
  }

  async icrc1BalanceOf(
    canisterId: string,
    account: Wallet.Account
  ): Promise<BigInt> {
    if (!this.agent) {
      throw new Error(
        "Agent is not initialized. Ensure the wallet is connected."
      );
    }
    console.log("agent", canisterId, account, this.agent);
    const actor = Actor.createActor(ICRC1_IDL, {
      agent: this.agent,
      canisterId,
    });
    console.log("actor", actor);

    return (1000n) as BigInt;
  }

  async disconnect(): Promise<void> {
    if (this.authClient) {
      this.readyState = "Loadable";
      this.agent = null;
      await this.authClient.logout();
      this.authClient = null;
    }
  }

  async createActor<T>(
    canisterId: string,
    idl: any
  ): Promise<ActorSubclass<T>> {
    if (!canisterId || !idl) {
      throw new Error("Canister ID and Interface Factory are required");
    }

    if (!this.agent) {
      throw new Error(
        "Agent is not initialized. Ensure the wallet is connected."
      );
    }

    return Actor.createActor(idl, { agent: this.agent, canisterId });
  }

  async createAgent(options?: {
    whitelist: string[];
    host?: string;
  }): Promise<void> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    const agent = HttpAgent.createSync({ identity, host: options.host });
    if (this.url.includes("localhost") || this.url.includes("127.0.0.1")) {
      await agent.fetchRootKey();
    }
  }

  async getAccountId(): Promise<string | null> {
    if (!this.authClient || !this.agent) {
      throw new Error("Wallet is not connected or initialized");
    }
    const identity = this.authClient.getIdentity();
    const principal = await identity.getPrincipal();
    const accountId = getAccountIdentifier(principal.toString());
    return accountId !== false ? accountId : null;
  }

  async getPrincipal(): Promise<Principal | null> {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized");
    }
    const identity = this.authClient.getIdentity();
    return identity.getPrincipal();
  }

  async getBalance(): Promise<bigint> {
    throw new Error("Method not implemented.");
  }

  async icrc1Transfer(
    canisterId: Principal,
    params: Wallet.TransferParams
  ): Promise<void> {
    const icrcActor = Actor.createActor(ICRC1_IDL, {
      agent: this.agent,
      canisterId: canisterId,
    });
    await icrcActor.icrc1_transfer(params);
  }

  async whoAmI(): Promise<Principal | null> {
    if (!this.authClient || !this.agent) {
      console.warn("NFID wallet is not connected or initialized");
    }
    const identity = this.authClient.getIdentity();
    return identity.getPrincipal();
  }

  async isConnected(): Promise<boolean> {
    return (await this.authClient?.isAuthenticated()) ?? false;
  }
}
