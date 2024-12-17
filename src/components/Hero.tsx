import React from 'react';
import { Shield, Database, Lock } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export function Hero() {

  const navigate = useNavigate();

  const handleLaunchClick = () => {
    navigate("/app"); // Navigate to /app
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-950 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Health, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Secured for the Future</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Revolutionary blockchain-powered health record management built on Hedera Hashgraph.
            Take control of your medical data with unparalleled security and accessibility.
          </p>
          
          <button onClick={handleLaunchClick} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            Launch DApp
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatedFeatureCard 
            icon={<Shield className="w-8 h-8 text-emerald-400" />}
            title="Secure Record Management"
            description="Military-grade encryption ensures your health records remain private and secure"
          />
          <AnimatedFeatureCard 
            icon={<Database className="w-8 h-8 text-blue-400" />}
            title="Interoperability"
            description="Seamless sharing between healthcare providers while maintaining security"
          />
          <AnimatedFeatureCard 
            icon={<Lock className="w-8 h-8 text-indigo-400" />}
            title="Patient Control"
            description="You decide who can access your health records and when"
          />
        </div>
      </div>
    </div>
  );
}

function AnimatedFeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative p-6 bg-gray-900 rounded-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          {icon}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-blue-100">{description}</p>
        </div>
      </div>
    </div>
  );
}