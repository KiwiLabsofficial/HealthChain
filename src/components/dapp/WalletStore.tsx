// WalletStatus.tsx
import React from 'react';
import { Wallet, ExternalLink } from 'lucide-react';
import { useWallet } from '../../lib/store';
import { CopyButton } from './CopyButton';

export function WalletStatus() {
  const { walletAddress, disconnectWallet, isWalletConnected } = useWallet();

  if (!isWalletConnected || !walletAddress) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg">
        <Wallet className="w-4 h-4 text-emerald-500" />
        <span className="text-sm text-gray-300">
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </span>
        <div className="flex items-center space-x-2">
          <CopyButton value={walletAddress} />
          <a
            href={`https://hashscan.io/#/testnet/account/${walletAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
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

