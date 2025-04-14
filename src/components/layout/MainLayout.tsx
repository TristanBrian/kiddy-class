
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { SidebarProvider } from './SidebarContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col md:flex-row bg-kiddy-background">
        {/* Sidebar - we'll add position-fixed for mobile only */}
        <Sidebar />
        {/* Main content - add left padding on desktop to account for sidebar */}
        <div className="flex-1 flex flex-col min-h-screen md:ml-64">
          <Topbar />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            {children}
          </main>
          <footer className="py-4 px-6 text-center text-sm text-muted-foreground border-t">
            <p>© {new Date().getFullYear()} Kiddy Class Control Hub. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
