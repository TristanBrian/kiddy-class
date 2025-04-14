
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Download } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ClassCard, { ClassProps } from '@/components/classes/ClassCard';

const ClassesPage: React.FC = () => {
  // Mock class data
  const classesData: ClassProps[] = [
    {
      id: '1',
      name: 'Green Class',
      level: 'pp1',
      teacher: 'Mrs. Adams',
      studentCount: 18,
      schedule: [
        'Monday: 9:00 AM - 2:00 PM',
        'Tuesday: 9:00 AM - 2:00 PM',
        'Wednesday: 9:00 AM - 12:00 PM',
      ],
    },
    {
      id: '2',
      name: 'Blue Class',
      level: 'pp2',
      teacher: 'Ms. Brown',
      studentCount: 20,
      schedule: [
        'Monday: 9:00 AM - 2:00 PM',
        'Wednesday: 9:00 AM - 2:00 PM',
        'Friday: 9:00 AM - 12:00 PM',
      ],
    },
    {
      id: '3',
      name: '1A',
      level: 'grade1',
      teacher: 'Mr. Johnson',
      studentCount: 25,
      schedule: [
        'Monday: 8:00 AM - 3:00 PM',
        'Tuesday: 8:00 AM - 3:00 PM',
        'Wednesday: 8:00 AM - 3:00 PM',
        'Thursday: 8:00 AM - 3:00 PM',
        'Friday: 8:00 AM - 1:00 PM',
      ],
    },
    {
      id: '4',
      name: '2B',
      level: 'grade2',
      teacher: 'Ms. Davis',
      studentCount: 23,
      schedule: [
        'Monday: 8:00 AM - 3:00 PM',
        'Tuesday: 8:00 AM - 3:00 PM',
        'Wednesday: 8:00 AM - 3:00 PM',
        'Thursday: 8:00 AM - 3:00 PM',
        'Friday: 8:00 AM - 1:00 PM',
      ],
    },
    {
      id: '5',
      name: '5A',
      level: 'grade5',
      teacher: 'Mr. Wilson',
      studentCount: 22,
      schedule: [
        'Monday: 8:00 AM - 4:00 PM',
        'Tuesday: 8:00 AM - 4:00 PM',
        'Wednesday: 8:00 AM - 4:00 PM',
        'Thursday: 8:00 AM - 4:00 PM',
        'Friday: 8:00 AM - 2:00 PM',
      ],
    },
    {
      id: '6',
      name: '8A',
      level: 'grade8',
      teacher: 'Mrs. Thomas',
      studentCount: 24,
      schedule: [
        'Monday: 7:30 AM - 4:00 PM',
        'Tuesday: 7:30 AM - 4:00 PM',
        'Wednesday: 7:30 AM - 4:00 PM',
        'Thursday: 7:30 AM - 4:00 PM',
        'Friday: 7:30 AM - 2:00 PM',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Classes</h2>
          <p className="text-muted-foreground">Manage and organize your classes</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Class
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Class Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search classes..."
                  className="pl-9 w-full"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Grade Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="preprimary">Pre-Primary</SelectItem>
                  <SelectItem value="primary">Primary (1-3)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (4-6)</SelectItem>
                  <SelectItem value="upper">Upper Primary (7-8)</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {classesData.map((classItem) => (
              <ClassCard key={classItem.id} {...classItem} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassesPage;
