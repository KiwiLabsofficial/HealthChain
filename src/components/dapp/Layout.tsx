import React from 'react';
import { DAppNavigation } from './DAppNavigation';
import { DAppSidebar } from './DAppSidebar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <DAppNavigation />
      <div className="flex">
        <DAppSidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}