import React, { useState } from 'react';
import { Users, UserPlus, UserMinus, Clock } from 'lucide-react';

interface Provider {
  id: string;
  name: string;
  department: string;
  accessLevel: string;
  expiry: string;
}

export function AccessControl() {
  const [providers, setProviders] = useState<Provider[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      accessLevel: 'Full Access',
      expiry: '2024-04-15'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      department: 'Radiology',
      accessLevel: 'View Only',
      expiry: '2024-03-30'
    }
  ]);

  const [showAddProvider, setShowAddProvider] = useState(false);

  const handleRevokeAccess = (id: string) => {
    setProviders(providers.filter(provider => provider.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Access Control</h2>
        <button
          onClick={() => setShowAddProvider(!showAddProvider)}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          <span>Add Provider</span>
        </button>
      </div>

      {showAddProvider && (
        <div className="bg-gray-800 p-6 rounded-lg space-y-4">
          <h3 className="text-lg font-medium text-white">Add New Provider</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Provider Name"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="text"
              placeholder="Department"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="full">Full Access</option>
              <option value="view">View Only</option>
              <option value="limited">Limited Access</option>
            </select>
            <input
              type="date"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Grant Access
          </button>
        </div>
      )}

      <div className="bg-gray-800 rounded-lg">
        <div className="p-6 space-y-6">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-emerald-500" />
                <div>
                  <h3 className="text-white font-medium">{provider.name}</h3>
                  <p className="text-gray-400 text-sm">{provider.department}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-emerald-500 text-sm font-medium">
                    {provider.accessLevel}
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Expires: {provider.expiry}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleRevokeAccess(provider.id)}
                  className="p-2 text-red-400 hover:text-red-500 transition-colors"
                >
                  <UserMinus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}