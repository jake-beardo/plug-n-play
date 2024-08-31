// Path: src/adapters/index.ts
// Import adapters
import { Wallet } from '../../types';
import { NNSAdapter } from "./NNSAdapter";
import { PlugAdapter } from "./PlugAdapter";
import { NFIDAdapter } from "./NFIDAdapter";
import dfinityLogo from "../../assets/dfinity.svg";
import nfidLogo from "../../assets/nfid.svg";
import plugLogo from "../../assets/plug.jpg"; 

export const walletList: Wallet.AdapterInfo[] = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: dfinityLogo,
    adapter: NNSAdapter,
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: plugLogo,
    adapter: PlugAdapter,
  },
  {
    id: "nfid",
    name: "NFID",
    icon: nfidLogo,
    adapter: NFIDAdapter,
  },
];

export {
  NNSAdapter,
  PlugAdapter,
  NFIDAdapter,
};