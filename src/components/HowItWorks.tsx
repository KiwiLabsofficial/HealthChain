import React from 'react';
import { Upload, Key, FileCheck, Share2 } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform simplifies the process of managing your health records
            while maintaining the highest level of security
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-blue-500 transform -translate-x-1/2 md:block hidden" />
          
          <div className="space-y-16">
            <Step
              icon={<Upload />}
              title="Upload Records"
              description="Securely upload your health records to the Hedera network"
              align="left"
            />
            <Step
              icon={<Key />}
              title="Set Permissions"
              description="Define who can access your records and for how long"
              align="right"
            />
            <Step
              icon={<FileCheck />}
              title="Verify Access"
              description="All access requests are verified through smart contracts"
              align="left"
            />
            <Step
              icon={<Share2 />}
              title="Share Securely"
              description="Share your records with healthcare providers instantly"
              align="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ 
  icon, 
  title, 
  description, 
  align 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  align: 'left' | 'right';
}) {
  return (
    <div className={`flex items-center ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}>
      <div className={`md:w-1/2 ${align === 'right' ? 'md:pl-12' : 'md:pr-12'} text-center md:text-${align}`}>
        <div className="relative">
          <div className="inline-flex items-center justify-center p-4 bg-gray-800 rounded-lg mb-4">
            {React.cloneElement(icon as React.ReactElement, {
              className: 'w-8 h-8 text-emerald-500'
            })}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="md:w-1/2" />
    </div>
  );
}