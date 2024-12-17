import React from 'react';
import { FileText, Upload, Users, Clock } from 'lucide-react';
import { UploadRecord } from './UploadRecords';
import { AccessControl } from './AccessControl';
import { AuditLogs } from './AuditLogs';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FileText className="w-8 h-8 text-emerald-500" />}
          label="Total Records"
          value="12"
        />
        <StatCard
          icon={<Upload className="w-8 h-8 text-blue-500" />}
          label="Uploads This Month"
          value="3"
        />
        <StatCard
          icon={<Users className="w-8 h-8 text-indigo-500" />}
          label="Active Shares"
          value="5"
        />
        <StatCard
          icon={<Clock className="w-8 h-8 text-purple-500" />}
          label="Pending Requests"
          value="2"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UploadRecord />
        <AccessControl />
      </div>

      <AuditLogs />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{label}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}