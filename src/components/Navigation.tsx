import React from 'react';
import { Menu, X, Activity } from 'lucide-react';
// import { useWalletStore } from '../lib/store';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const { isConnected, connect, disconnect, accountId } = useWalletStore();

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Activity className="w-8 h-8 text-emerald-500" />
            <span className="ml-2 text-xl font-bold text-white">HealthChain</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            {/* <NavLink href="#demo">Demo</NavLink> */}
            
            {/* <button
              onClick={isConnected ? disconnect : connect}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:shadow-lg transition-all duration-200"
            >
              {isConnected ? `Connected: ${accountId?.slice(0, 6)}...` : 'Connect Wallet'}
            </button> */}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#how-it-works">How It Works</MobileNavLink>
            {/* <MobileNavLink href="#demo">Demo</MobileNavLink> */}
            
            {/* <button
              onClick={isConnected ? disconnect : connect}
              className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:shadow-lg transition-all duration-200"
            >
              {isConnected ? `Connected: ${accountId?.slice(0, 6)}...` : 'Connect Wallet'}
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
    >
      {children}
    </a>
  );
}