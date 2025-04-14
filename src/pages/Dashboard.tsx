
import React from 'react';
import { CalendarDays, Users, GraduationCap, School, Clock, Send, BookOpen, TrendingUp, Bell, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import StatCard from '@/components/dashboard/StatCard';
import ActivityItem from '@/components/dashboard/ActivityItem';
import { useAuth } from '@/context/AuthContext';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import TeacherDashboard from '@/components/dashboard/TeacherDashboard';

const Dashboard: React.FC = () => {
  const { profile, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    </div>;
  }

  // Render dashboard based on user role
  if (profile?.role === 'admin') {
    return <AdminDashboard />;
  } else if (profile?.role === 'teacher') {
    return <TeacherDashboard />;
  }

  // Default dashboard for unknown roles
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome to KiddyClass Control Hub</p>
        </div>
      </div>

      <div className="p-8 text-center">
        <h3 className="text-2xl font-medium mb-2">Access Restricted</h3>
        <p className="text-muted-foreground mb-6">Your account doesn't have a recognized role. Please contact an administrator.</p>
        <Button>Contact Support</Button>
      </div>
    </div>
  );
};

export default Dashboard;
