import React from 'react';
import { Activity, Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WalletStatus } from './WalletStore';

export function DAppNavigation() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Activity className="w-8 h-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">HealthChain</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-6 h-6" />
            </button>
            <div className="border-l border-gray-700 h-6 mx-4" />
            <WalletStatus />
          </div>
        </div>
      </div>
    </nav>
  );
}