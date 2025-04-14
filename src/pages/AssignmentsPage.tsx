
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AssignmentsPage: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: "Mathematics Homework - Fractions",
      class: "Grade 3",
      dueDate: "Today",
      submissions: 18,
      totalStudents: 28,
      status: "active"
    },
    {
      id: 2,
      title: "Science Project - Plants and Growth",
      class: "Grade 3",
      dueDate: "Apr 12",
      submissions: 10,
      totalStudents: 28,
      status: "active"
    },
    {
      id: 3,
      title: "English Essay - My Family",
      class: "Grade 3",
      dueDate: "Apr 10",
      submissions: 25,
      totalStudents: 28,
      status: "active"
    },
    {
      id: 4,
      title: "Art Project - Spring Colors",
      class: "Grade 3",
      dueDate: "Completed",
      submissions: 28,
      totalStudents: 28,
      status: "completed"
    },
    {
      id: 5,
      title: "History Quiz - Ancient Civilizations",
      class: "Grade 3",
      dueDate: "Completed",
      submissions: 26,
      totalStudents: 28,
      status: "completed"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Assignments</h2>
          <p className="text-muted-foreground">Manage your class assignments and submissions</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Assignment
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search assignments..."
            className="w-full pl-9 rounded-lg"
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-4">
        {assignments.map(assignment => (
          <Card key={assignment.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:border-r flex-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{assignment.title}</h3>
                        <Badge variant="outline" className={
                          assignment.status === 'active' ? 'bg-green-50 text-green-700 border-green-200' :
                          'bg-blue-50 text-blue-700 border-blue-200'
                        }>
                          {assignment.status === 'active' ? 'Active' : 'Completed'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{assignment.class}</p>
                      <div className="flex items-center gap-6 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Due Date</p>
                          <p className={`text-sm font-medium ${assignment.dueDate === 'Today' ? 'text-amber-600' : ''}`}>{assignment.dueDate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Submissions</p>
                          <p className="text-sm font-medium">{assignment.submissions}/{assignment.totalStudents}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/20 p-4 md:p-6 flex items-center justify-center gap-2 md:w-48">
                  <Button variant="outline" className="w-full md:w-auto">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsPage;
