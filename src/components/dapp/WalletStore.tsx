import React from 'react';
import { Wallet, ExternalLink } from 'lucide-react';
import { useWallet } from '../../lib/store';

export function WalletStatus() {
  const { walletAddress, disconnectWallet } = useWallet();

  // Using a placeholder address if none is provided
  const displayAddress = walletAddress || '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
  
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg">
        <Wallet className="w-4 h-4 text-emerald-500" />
        <span className="text-sm text-gray-300">
          {displayAddress.slice(0, 6)}...{displayAddress.slice(-4)}
        </span>
        <a
          href={`https://hashscan.io/#/testnet/account/${displayAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <button
        onClick={disconnectWallet}
        className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
      >
        Disconnect
      </button>
    </div>
  );
}