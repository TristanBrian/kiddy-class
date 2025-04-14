
import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import { useSidebar } from './SidebarContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Topbar: React.FC = () => {
  const { toggle } = useSidebar();
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-background border-b border-border h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggle}
          >
            <Menu size={24} />
          </Button>
        )}
        <h1 className="text-xl font-bold text-foreground hidden md:block">Kiddy Class Control Hub</h1>
      </div>
      
      <div className="hidden md:flex w-96 max-w-sm">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-9 rounded-lg"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-kiddy-coral rounded-full"></span>
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
