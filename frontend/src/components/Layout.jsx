import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Sidebar />
      <main className="ml-64 p-8 min-h-screen overflow-x-hidden">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest">{isAdmin ? 'Admin Portal' : 'Student Portal'}</h2>
            <div className="h-1 w-12 bg-secondary mt-1"></div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-bold text-primary">Academic Session 2025-26</p>
              <p className="text-xs text-muted">Varanasi, Uttar Pradesh</p>
            </div>
          </div>
        </header>
        <div className="animate-in fade-in duration-700">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
