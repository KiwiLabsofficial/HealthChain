// import React from 'react';
// import { Layout } from '../components/dapp/Layout';
// import { Dashboard } from '../components/dapp/Dashboard';
// import { useWalletStore } from '../lib/store';
// import { Activity, ShieldAlert } from 'lucide-react';

// export function DApp() {
//   const { isConnected, connect, accountId } = useWalletStore();
//   const [isConnecting, setIsConnecting] = React.useState(false);
//   const [error, setError] = React.useState<string | null>(null);

//   const handleConnect = async () => {
//     try {
//       setIsConnecting(true);
//       setError(null);
//       await connect();
//     } catch (err) {
//       setError('Failed to connect wallet. Please try again.');
//       console.error('Connection error:', err);
//     } finally {
//       setIsConnecting(false);
//     }
//   };

//   if (!isConnected) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
//         <div className="max-w-md w-full">
//           <div className="text-center mb-8">
//             <Activity className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
//             <h1 className="text-3xl font-bold text-white mb-4">Welcome to HealthChain</h1>
//             <p className="text-gray-400 mb-8">
//               Connect your wallet to access your secure health records
//             </p>
//           </div>

//           {error && (
//             <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center space-x-3">
//               <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0" />
//               <p className="text-red-200 text-sm">{error}</p>
//             </div>
//           )}

//           <button
//             onClick={handleConnect}
//             disabled={isConnecting}
//             className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
//               isConnecting
//                 ? 'bg-gray-600 cursor-not-allowed'
//                 : 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:shadow-lg transform hover:-translate-y-1'
//             }`}
//           >
//             {isConnecting ? (
//               <span className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Connecting...
//               </span>
//             ) : (
//               'Connect Wallet'
//             )}
//           </button>

//           {accountId && (
//             <p className="mt-4 text-center text-sm text-gray-400">
//               Account: {accountId.slice(0, 6)}...{accountId.slice(-4)}
//             </p>
//           )}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Layout>
//       <Dashboard />
//     </Layout>
//   );
// }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import WalletInfo from '../components/dapp/WalletInfo';
import { Layout } from '../components/dapp/Layout';
import { Dashboard } from '../components/dapp/Dashboard';

import { ConnectWalletProps } from '../types/dapp';

const DApp: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>('');

  const connectWallet = (): void => {
    // Simulating wallet connection
    setWalletAddress('0x1234567890abcdef1234567890abcdef12345678');
    setIsWalletConnected(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      
      {isWalletConnected}
      
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