import React from 'react';
import { FileKey, Users, History } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powered by Advanced Technology
          </h2>
          <p className="text-xl text-gray-400">
            Built on Hedera Hashgraph for unmatched security and performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<FileKey className="w-12 h-12 text-emerald-500" />}
            title="Secure Upload"
            description="End-to-end encrypted health record uploads directly to the blockchain"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-blue-500" />}
            title="Smart Access Control"
            description="Grant and revoke access to your records with smart contracts"
          />
          <FeatureCard
            icon={<History className="w-12 h-12 text-indigo-500" />}
            title="Immutable Audit Logs"
            description="Track every access attempt with Hedera Consensus Service"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors duration-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-gray-900 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}