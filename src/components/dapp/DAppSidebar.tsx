import React from 'react';
import { Home, FileText, Users, History, Settings } from 'lucide-react';

export function DAppSidebar() {
  return (
    <aside className="w-64 bg-gray-800 min-h-screen p-4">
      <nav className="space-y-2">
        <SidebarLink icon={<Home className="w-5 h-5" />} label="Dashboard" active />
        <SidebarLink icon={<FileText className="w-5 h-5" />} label="My Records" />
        <SidebarLink icon={<Users className="w-5 h-5" />} label="Access Control" />
        <SidebarLink icon={<History className="w-5 h-5" />} label="Activity Log" />
        <SidebarLink icon={<Settings className="w-5 h-5" />} label="Settings" />
      </nav>
    </aside>
  );
}

function SidebarLink({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
        active
          ? 'bg-gray-700 text-white'
          : 'text-gray-400 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}