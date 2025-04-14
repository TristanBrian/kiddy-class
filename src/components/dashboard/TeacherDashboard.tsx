
import React from 'react';
import { CalendarDays, Users, BookOpen, School, Clock, Send, FileText, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import StatCard from '@/components/dashboard/StatCard';
import ActivityItem from '@/components/dashboard/ActivityItem';
import { useAuth } from '@/context/AuthContext';

const TeacherDashboard: React.FC = () => {
  const { profile } = useAuth();
  
  // Mock data for teacher-specific view
  const recentActivities = [
    { 
      title: "New student joined your class", 
      description: "Emma Thompson was added to your class", 
      time: "2 hours ago",
      status: "success" as const,
      icon: <Users size={16} />
    },
    { 
      title: "Assignment submitted", 
      description: "15 students submitted homework", 
      time: "Yesterday",
      status: "info" as const,
      icon: <BookOpen size={16} />
    },
    { 
      title: "Parent meeting scheduled", 
      description: "Meeting with Thompson parents at 3 PM", 
      time: "Yesterday",
      status: "warning" as const,
      icon: <CalendarDays size={16} />
    }
  ];

  const upcomingClasses = [
    {
      subject: "Mathematics",
      grade: "Grade 3",
      time: "9:00 AM - 10:00 AM",
      room: "Room 101"
    },
    {
      subject: "Science",
      grade: "Grade 4",
      time: "11:00 AM - 12:00 PM",
      room: "Lab 2"
    },
    {
      subject: "English",
      grade: "Grade 3",
      time: "1:00 PM - 2:00 PM",
      room: "Room 101"
    }
  ];

  const studentList = [
    { name: "Emma Thompson", attendance: "Present", grade: "A" },
    { name: "Michael Johnson", attendance: "Present", grade: "B+" },
    { name: "Sophia Williams", attendance: "Absent", grade: "A-" },
    { name: "Daniel Brown", attendance: "Present", grade: "B" },
    { name: "Olivia Davis", attendance: "Late", grade: "A" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
          <p className="text-muted-foreground">Welcome back, {profile?.full_name || 'Teacher'}</p>
        </div>
        <Button className="hidden sm:flex">
          <CalendarDays className="mr-2 h-4 w-4" /> My Schedule
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="My Students" 
          value={28} 
          icon={Users} 
          iconColor="text-kiddy-blue" 
          bgColor="bg-kiddy-blue/10"
        />
        
        <StatCard 
          title="Classes Today" 
          value={5} 
          icon={School} 
          iconColor="text-kiddy-green" 
          bgColor="bg-kiddy-green/10"
        />
        
        <StatCard 
          title="Assignments" 
          value={12} 
          icon={BookOpen} 
          iconColor="text-kiddy-yellow" 
          bgColor="bg-kiddy-yellow/10" 
          change={{ value: 3, isPositive: false }}
        />
        
        <StatCard 
          title="Attendance" 
          value="96%" 
          icon={Clock} 
          iconColor="text-kiddy-coral" 
          bgColor="bg-kiddy-coral/10" 
          change={{ value: 2.1, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Today's Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((cls, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <School className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{cls.subject}</h4>
                      <span className="text-sm text-muted-foreground">{cls.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{cls.grade}</span>
                      <span>•</span>
                      <span>{cls.room}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-1 h-3.5 w-3.5" />
                    Materials
                  </Button>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-sm">
                View Full Schedule
              </Button>
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

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Student List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="py-2 px-3 text-left font-medium">Name</th>
                    <th className="py-2 px-3 text-left font-medium">Attendance</th>
                    <th className="py-2 px-3 text-left font-medium">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {studentList.map((student, index) => (
                    <tr key={index}>
                      <td className="py-2 px-3">{student.name}</td>
                      <td className="py-2 px-3">
                        <Badge variant="outline" className={
                          student.attendance === 'Present' ? 'bg-green-50 text-green-700 border-green-200' :
                          student.attendance === 'Late' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          'bg-red-50 text-red-700 border-red-200'
                        }>
                          {student.attendance}
                        </Badge>
                      </td>
                      <td className="py-2 px-3">{student.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button variant="ghost" className="w-full text-sm mt-4">
              View All Students
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col">
                <FileText className="h-5 w-5 mb-1" />
                <span>Take Attendance</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col">
                <BookOpen className="h-5 w-5 mb-1" />
                <span>Create Assignment</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col">
                <Bell className="h-5 w-5 mb-1" />
                <span>Send Notification</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col">
                <Send className="h-5 w-5 mb-1" />
                <span>Message Parents</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
