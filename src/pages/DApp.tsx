import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import WalletInfo from '../components/dapp/WalletInfo';
import { Layout } from '../components/dapp/Layout';
import { Dashboard } from '../components/dapp/Dashboard';
import { WalletProvider } from '../lib/store';
import { ConnectWalletProps } from '../types/dapp';
import { useWallet } from '../lib/store';

const DApp: React.FC = () => {
  return (
    <WalletProvider>
      <DAppContent />
    </WalletProvider>
  );
};

const DAppContent: React.FC = () => {
  const { isWalletConnected, connectWallet } = useWallet();

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {!isWalletConnected ? (
            <ConnectWallet onConnect={connectWallet} />
          ) : (
            <Layout>
              <Dashboard />
            </Layout>
          )}
        </div>
      </main>
    </div>
  );
};

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onConnect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-8 rounded-xl text-center max-w-md w-full"
      >
        <Wallet className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Welcome to HealthChain</h2>
        <p className="text-gray-300 mb-8">
          Connect your wallet to access your secure health records
        </p>
        <button
          onClick={onConnect}
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors"
        >
          Connect Wallet
        </button>
      </motion.div>
    </div>
  );
};

export default DApp;