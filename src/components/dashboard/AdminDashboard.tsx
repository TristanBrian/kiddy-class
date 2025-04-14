
import React from 'react';
import { CalendarDays, Users, GraduationCap, School, Clock, Send, Book, BarChart2, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import StatCard from '@/components/dashboard/StatCard';
import ActivityItem from '@/components/dashboard/ActivityItem';
import { useAuth } from '@/context/AuthContext';

const AdminDashboard: React.FC = () => {
  const { profile } = useAuth();
  
  // Mock data
  const recentActivities = [
    { 
      title: "New student enrolled", 
      description: "Emma Thompson was registered to PP2 Green class", 
      time: "2 hours ago",
      status: "success" as const,
      icon: <Users size={16} />
    },
    { 
      title: "Teacher absence", 
      description: "Mrs. Johnson reported sick leave for today", 
      time: "5 hours ago",
      status: "warning" as const,
      icon: <GraduationCap size={16} />
    },
    { 
      title: "Class rescheduled", 
      description: "Grade 3 Art class moved to Thursday", 
      time: "Yesterday",
      status: "info" as const,
      icon: <CalendarDays size={16} />
    },
    { 
      title: "Payment overdue", 
      description: "3 students have pending payments", 
      time: "2 days ago",
      status: "error" as const,
      icon: <School size={16} />
    },
  ];

  const upcomingTasks = [
    {
      title: "Review curriculum updates",
      dueDate: "Today",
      priority: "high"
    },
    {
      title: "Complete monthly attendance report",
      dueDate: "Tomorrow",
      priority: "medium"
    },
    {
      title: "Parent-teacher conference preparation",
      dueDate: "Apr 15",
      priority: "medium"
    },
    {
      title: "Order new classroom supplies",
      dueDate: "Apr 18",
      priority: "low"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, {profile?.full_name || 'Administrator'}</p>
        </div>
        <Button className="hidden sm:flex">
          <CalendarDays className="mr-2 h-4 w-4" /> View Calendar
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value={387} 
          icon={Users} 
          iconColor="text-kiddy-blue" 
          bgColor="bg-kiddy-blue/10" 
          change={{ value: 5.2, isPositive: true }}
        />
        
        <StatCard 
          title="Total Teachers" 
          value={24} 
          icon={GraduationCap} 
          iconColor="text-kiddy-green" 
          bgColor="bg-kiddy-green/10" 
          change={{ value: 2, isPositive: true }}
        />
        
        <StatCard 
          title="Classes" 
          value={16} 
          icon={School} 
          iconColor="text-kiddy-yellow" 
          bgColor="bg-kiddy-yellow/10" 
        />
        
        <StatCard 
          title="Revenue" 
          value="$24,380" 
          icon={BarChart2} 
          iconColor="text-kiddy-purple" 
          bgColor="bg-kiddy-purple/10" 
          change={{ value: 8.1, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">School Performance</CardTitle>
            <Tabs defaultValue="weekly">
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[250px] flex flex-col items-center justify-center bg-muted/10 rounded-lg">
              <BarChart2 className="h-12 w-12 mb-2 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">Revenue and enrollment metrics</p>
              <p className="text-xs text-muted-foreground/70 mt-1">School performance metrics for administrators</p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {recentActivities.map((activity, index) => (
              <ActivityItem
                key={index}
                title={activity.title}
                description={activity.description}
                time={activity.time}
                status={activity.status}
                icon={activity.icon}
              />
            ))}
            <Button variant="ghost" className="w-full text-sm mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">Administrative Tools</CardTitle>
            <Button variant="outline" size="sm">
              <Send className="mr-2 h-4 w-4" /> Action Center
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-2">
              <Button variant="outline" className="h-24 flex flex-col gap-1">
                <Users className="h-5 w-5 mb-1" />
                <span>Manage Users</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-1">
                <School className="h-5 w-5 mb-1" />
                <span>School Settings</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-1">
                <GraduationCap className="h-5 w-5 mb-1" />
                <span>Curriculum</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-1">
                <Book className="h-5 w-5 mb-1" />
                <span>Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-medium">Admin Tasks</CardTitle>
              <Badge variant="outline" className="text-kiddy-coral border-kiddy-coral/20">
                {upcomingTasks.length} Tasks
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <li key={index} className="flex items-start gap-3 p-2 border rounded-lg">
                  <div className={`w-1 self-stretch rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' : 
                    task.priority === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{task.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">Due: {task.dueDate}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-full">
                    <Bell size={14} />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
