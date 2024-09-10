// Path: src/adapters/index.ts
// Import adapters
import { NNSAdapter } from "./NNSAdapter";
import { PlugAdapter } from "./PlugAdapter";
import { NFIDAdapter } from "./NFIDAdapter";
import { Wallet } from '../types/index';
import dfinityLogo from "../../assets/dfinity.svg";
import plugLogo from "../../assets/plug.jpg"; 
import bitfinityLogo from "../../assets/bitfinity.svg";
import nfidLogo from "../../assets/nfid.svg";

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
    name: "NFID Wallet",
    icon: nfidLogo,
    adapter: NFIDAdapter,
  },

];

export {
  NNSAdapter,
  PlugAdapter,
  NFIDAdapter,
};