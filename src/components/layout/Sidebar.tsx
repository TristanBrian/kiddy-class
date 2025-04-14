
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSidebar } from './SidebarContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/context/AuthContext';
import { 
  Home, 
  Users, 
  CalendarDays, 
  School, 
  FileText, 
  Settings, 
  LogOut,
  UserCircle,
  X,
  BookOpen,
  BarChart2,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Sidebar: React.FC = () => {
  const { isOpen, close } = useSidebar();
  const isMobile = useIsMobile();
  const location = useLocation();
  const { user, profile, signOut } = useAuth();
  
  // Define navigation items based on user role
  const getNavigationItems = () => {
    const baseItems = [
      { path: '/dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    ];
    
    // Admin sees all navigation items
    if (profile?.role === 'admin') {
      return [
        ...baseItems,
        { path: '/students', label: 'Students', icon: <Users size={20} /> },
        { path: '/teachers', label: 'Teachers', icon: <School size={20} /> },
        { path: '/classes', label: 'Classes', icon: <CalendarDays size={20} /> },
        { path: '/reports', label: 'Reports', icon: <FileText size={20} /> },
        { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
      ];
    }
    
    // Teacher sees a limited set of navigation items
    else if (profile?.role === 'teacher') {
      return [
        ...baseItems,
        { path: '/students', label: 'My Students', icon: <Users size={20} /> },
        { path: '/classes', label: 'My Classes', icon: <CalendarDays size={20} /> },
        { path: '/assignments', label: 'Assignments', icon: <BookOpen size={20} /> },
        { path: '/settings', label: 'Settings', icon: <Settings size={20} /> },
      ];
    }
    
    // Default navigation items for other roles
    return baseItems;
  };
  
  const navigationItems = getNavigationItems();
  
  const sidebarClasses = cn(
    'bg-sidebar fixed h-full z-40 w-64 flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out',
    isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
  );
  
  const closeButton = (
    <button
      onClick={close}
      className="absolute top-4 right-4 text-sidebar-foreground hover:text-white md:hidden"
    >
      <X size={24} />
    </button>
  );

  const handleLogout = async () => {
    await signOut();
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!profile?.full_name) return "U";
    return profile.full_name
      .split(" ")
      .map(name => name[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  // Get role display badge
  const getRoleBadge = () => {
    if (!profile?.role) return null;
    
    const badgeClasses = cn(
      "px-2 py-0.5 text-xs rounded-full",
      profile.role === 'admin' ? "bg-kiddy-coral/20 text-kiddy-coral" : "bg-kiddy-blue/20 text-kiddy-blue"
    );
    
    return (
      <span className={badgeClasses}>
        {profile.role.charAt(0).toUpperCase() + profile.role.slice(1)}
      </span>
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={close}
        />
      )}
      
      <aside className={sidebarClasses}>
        {isMobile && closeButton}
        
        <div className="p-6 flex items-center justify-center border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-kiddy-blue to-kiddy-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <h1 className="text-xl font-bold text-white">KiddyClass</h1>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={isMobile ? close : undefined}
              className={({ isActive }) => cn(
                'nav-item',
                isActive && 'active'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          {user ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg">
                <Avatar className="h-10 w-10 border border-sidebar-border">
                  {profile?.avatar_url ? (
                    <AvatarImage src={profile.avatar_url} alt={profile.full_name || ""} />
                  ) : (
                    <AvatarFallback className="bg-white text-sidebar">
                      {getUserInitials()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white">{profile?.full_name || "User"}</p>
                    {getRoleBadge()}
                  </div>
                  <p className="text-xs text-slate-300">{user.email}</p>
                </div>
              </div>
              
              <NavLink
                to="/settings"
                onClick={isMobile ? close : undefined}
                className="nav-item"
              >
                <UserCircle size={20} />
                <span>My Profile</span>
              </NavLink>
              
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-300 hover:text-red-100 rounded-md transition-colors"
              >
                <LogOut size={20} />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <NavLink to="/auth" className="w-full">
              <button className="w-full bg-white text-sidebar font-medium rounded-md py-2">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
