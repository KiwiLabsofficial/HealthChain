import { create } from 'zustand';
import { Client, AccountId, PrivateKey } from '@hashgraph/sdk';

interface WalletState {
  isConnected: boolean;
  accountId: string | null;
  client: Client | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  isConnected: false,
  accountId: null,
  client: null,
  connect: async () => {
    try {
      const client = Client.forTestnet();
      const operatorId = AccountId.fromString(process.env.VITE_OPERATOR_ID || '');
      const operatorKey = PrivateKey.fromString(process.env.VITE_OPERATOR_KEY || '');
      
      client.setOperator(operatorId, operatorKey);
      
      set({
        isConnected: true,
        accountId: operatorId.toString(),
        client
      });
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  },
  disconnect: () => {
    set({
      isConnected: false,
      accountId: null,
      client: null
    });
  }
}));