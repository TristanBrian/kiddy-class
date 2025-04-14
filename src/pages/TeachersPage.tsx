
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Download } from 'lucide-react';
import TeacherCard, { TeacherProps } from '@/components/teachers/TeacherCard';

const TeachersPage: React.FC = () => {
  // Mock teacher data
  const teachersData: TeacherProps[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Lead Teacher',
      subjects: ['Mathematics', 'Science'],
      classAssigned: 'Grade 3A',
      email: 'sarah.johnson@school.com',
      phone: '(555) 123-4567'
    },
    {
      id: '2',
      name: 'Michael Smith',
      role: 'Teacher',
      subjects: ['English', 'Social Studies'],
      classAssigned: 'Grade 2B',
      email: 'michael.smith@school.com',
      phone: '(555) 987-6543'
    },
    {
      id: '3',
      name: 'Emily Davis',
      role: 'Teacher',
      subjects: ['Art', 'Music'],
      classAssigned: 'PP3 Green',
      email: 'emily.davis@school.com',
      phone: '(555) 456-7890'
    },
    {
      id: '4',
      name: 'Daniel Wilson',
      role: 'Teacher',
      subjects: ['Physical Education', 'Health'],
      classAssigned: 'Grade 1A',
      email: 'daniel.wilson@school.com',
      phone: '(555) 789-0123'
    },
    {
      id: '5',
      name: 'Jennifer Martinez',
      role: 'Assistant Teacher',
      subjects: ['Reading', 'Writing'],
      classAssigned: 'PP2 Blue',
      email: 'jennifer.martinez@school.com',
      phone: '(555) 234-5678'
    },
    {
      id: '6',
      name: 'Robert Taylor',
      role: 'Teacher',
      subjects: ['Science', 'Computer'],
      classAssigned: 'Grade 4B',
      email: 'robert.taylor@school.com',
      phone: '(555) 321-6547'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Teachers</h2>
          <p className="text-muted-foreground">Manage your teaching staff</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Teacher
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Teaching Staff Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search teachers..."
                  className="pl-9 w-full"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachersData.map((teacher) => (
              <TeacherCard key={teacher.id} {...teacher} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeachersPage;
