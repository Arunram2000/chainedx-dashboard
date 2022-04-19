import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 4],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    43113: " https://api.avax-test.network/ext/bc/C/rpc",
  },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});

const switchRequest = (chainId = 1) => {
  const { ethereum } = window as any;
  return ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: ethers.utils.hexlify(chainId) }],
  });
};

export const switchNetwork = async () => {
  const { ethereum } = window as any;
  if (ethereum) {
    try {
      await switchRequest();
    } catch (error) {
      console.log(error);
    }
  }
};
