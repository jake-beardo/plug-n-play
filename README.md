# Plug N Play for the Internet Computer

Plug N Play simplifies the integration of Internet Computer wallets into your decentralized applications (dApps). It provides a standardized interface for connecting to various wallets, managing transactions, and interacting with the Internet Computer blockchain.

## Features

- Seamless integration with multiple Internet Computer wallets
- Simplified wallet connection, disconnection, and auto-reconnection
- Built-in support for signatures and transaction status monitoring
- Automatic data updates in response to wallet, block, and network changes
- Svelte store-based state management for reactive updates
- Batch transaction support for complex operations
- Robust error handling and delegation refresh mechanisms

## Supported Wallets

- Internet Identity
- NFID
- Plug
- More to be added

## Installation

Install Plug N Play using npm:

```bash
npm install @windoge98/plug-n-play
```

## Basic Usage

Here are key functions for a `WalletService` store inside of Svelte, including initialization:

```typescript
import { writable, get } from "svelte/store";
import { PnP } from "@windoge98/plug-n-play";
import { Principal } from "@dfinity/principal";

function createPnPStore() {
  const { subscribe, update } = writable({
    pnp: null,
    walletState: {
      principalId: null,
      accountId: null,
      activeWallet: null,
      balance: BigInt(0),
    },
  });

  async function init() {
    const pnp = new PnP({
      whitelist: ['ryjl3-tyaaa-aaaaa-aaaba-cai'], // ICP Ledger canister
      host: "https://ic0.app",
      identityProvider: "https://identity.ic0.app",
    });

    update(store => ({ ...store, pnp }));
    await attemptReconnect();
  }

  async function attemptReconnect() {
    const lastWallet = localStorage.getItem('lastConnectedWallet');
    if (lastWallet) {
      try {
        await connect(lastWallet);
        console.log("Successfully reconnected to wallet:", lastWallet);
      } catch (error) {
        console.error("Failed to reconnect to wallet:", error);
        localStorage.removeItem('lastConnectedWallet');
      }
    }
  }

  async function connect(walletId: string) {
    const store = get({ subscribe });
    if (!store.pnp) throw new Error('PnP not initialized');

    const principalId = await store.pnp.connect(walletId);
    if (principalId) {
      const balance = await getBalance(principalId);
      update(s => ({
        ...s,
        walletState: {
          principalId,
          accountId: store.pnp.accountId,
          activeWallet: walletId,
          balance,
        },
      }));
      localStorage.setItem('lastConnectedWallet', walletId);
    }
    return principalId;
  }

  async function transfer(to: string, amount: bigint): Promise {
    const store = get({ subscribe });
    if (!store.pnp || !store.walletState.principalId) throw new Error('Wallet not connected');

    try {
      const ledgerActor = await store.pnp.getSignedActor('ryjl3-tyaaa-aaaaa-aaaba-cai', {} as any); // ICP Ledger canister
      const result = await ledgerActor.icrc1_transfer({
        to: { owner: Principal.fromText(to), subaccount: [] },
        amount,
        fee: [],
        memo: [],
        from_subaccount: [],
        created_at_time: [],
      });
      
      // Update balance after transfer
      const newBalance = await getBalance(store.walletState.principalId);
      update(s => ({
        ...s,
        walletState: { ...s.walletState, balance: newBalance },
      }));

      return `Transfer successful. Transaction ID: ${result.Ok}`;
    } catch (error) {
      console.error('Transfer failed:', error);
      return 'Transfer failed: ' + (error as Error).message;
    }
  }

  // Other methods...

  return {
    subscribe,
    init,
    connect,
    transfer,
    // Other exposed methods...
  };
}

export const WalletService = createPnPStore();
```

## Usage in a Svelte Component

```svelte
<script lang="ts">
  import { onMount } from "svelte";
  import { WalletService } from "./WalletService";

  let walletState;
  WalletService.subscribe(value => walletState = value.walletState);

  onMount(async () => {
    await WalletService.init();
  });

  async function handleConnect(walletId: string) {
    try {
      await WalletService.connect(walletId);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }

  async function handleTransfer(to: string, amount: string) {
    try {
      const result = await WalletService.transfer(to, BigInt(amount));
      console.log(result);
    } catch (error) {
      console.error('Transfer failed:', error);
    }
  }
</script>

<main>
  {#if !walletState.activeWallet}
    <button on:click={() => handleConnect('internet-identity')}>Connect Wallet</button>
  {:else}
    <p>Connected: {walletState.principalId}</p>
    <p>Balance: {walletState.balance.toString()}</p>
    <!-- Transfer form -->
  {/if}
</main>
```


## Advanced Usage: Reconnection Mechanism

The `WalletService` includes a reconnection mechanism that attempts to reconnect to the previously used wallet when the page is reloaded. This is handled automatically in the `init` function:

```typescript
async function init() {
  // ... (PnP setup code)

  // Attempt to reconnect
  await attemptReconnect();
}

async function attemptReconnect() {
  const lastWallet = localStorage.getItem('lastConnectedWallet');
  if (lastWallet) {
    try {
      await connect(lastWallet);
      console.log("Successfully reconnected to wallet:", lastWallet);
    } catch (error) {
      console.error("Failed to reconnect to wallet:", error);
      localStorage.removeItem('lastConnectedWallet');
    }
  }
}
```

## Error Handling

The `WalletService` includes built-in error handling. Here's an example of how errors are handled in the `getWhoAmIResponse` function:

```typescript
async function getWhoAmIResponse(): Promise<string> {
  const store = get({ subscribe });
  try {
    if (!store.walletState.activeWallet) {
      throw new Error("Wallet is not active");
    }

    const dogActor = await createSignedActor(Canisters.DOG);
    const response = await dogActor.whoami();
    return JSON.stringify(response);
  } catch (error) {
    console.error("Failed in getWhoAmIResponse:", error);
    return "Error: " + (error as Error).message;
  }
}
```

## Best Practices

1. Always use the `WalletService` methods for wallet interactions to ensure consistent state management.
2. Utilize the reactive nature of Svelte stores to keep your UI in sync with the wallet state.
3. Implement thorough error handling when calling `WalletService` methods.
4. Regularly verify your canister configurations and keep them updated.
5. For local development, always ensure the correct host and identity provider are set.

## License

This project is licensed under the [MIT License]([link-to-license-file](https://github.com/microdao-corporation/plug-n-play/blob/main/LICENSE.txt)).

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub issue tracker]([link-to-github-issues](https://github.com/microdao-corporation/plug-n-play/issues)).

---

For more information about the Internet Computer and Dfinity, visit [https://dfinity.org/](https://dfinity.org/).