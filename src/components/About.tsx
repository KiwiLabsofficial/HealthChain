import React from 'react';
import { Shield, Users, Clock } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Revolutionizing Healthcare Data
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform leverages Hedera Hashgraph's powerful distributed ledger technology
            to create a secure, efficient, and patient-centric health record system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AboutCard
            icon={<Shield className="w-12 h-12 text-emerald-500" />}
            title="Privacy First"
            description="Your health data is encrypted and secured using state-of-the-art blockchain technology"
          />
          <AboutCard
            icon={<Users className="w-12 h-12 text-blue-500" />}
            title="Patient Empowerment"
            description="Take control of your health records and decide who can access them"
          />
          <AboutCard
            icon={<Clock className="w-12 h-12 text-indigo-500" />}
            title="Real-time Access"
            description="Instant and secure access to your health records whenever you need them"
          />
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors duration-200">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 bg-gray-800 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}