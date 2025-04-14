
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, Search, Download, Filter } from 'lucide-react';
import StudentListItem, { StudentProps } from '@/components/students/StudentListItem';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';

const StudentsPage: React.FC = () => {
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  
  // Mock student data
  const studentData: StudentProps[] = [
    { id: '1', name: 'Emma Johnson', class: 'PP2 Green', age: 5, gender: 'female', attendance: 95 },
    { id: '2', name: 'Liam Williams', class: 'PP3 Blue', age: 6, gender: 'male', attendance: 87 },
    { id: '3', name: 'Olivia Brown', class: 'Grade 1A', age: 7, gender: 'female', attendance: 98 },
    { id: '4', name: 'Noah Davis', class: 'Grade 1B', age: 7, gender: 'male', attendance: 92 },
    { id: '5', name: 'Sophia Martinez', class: 'Grade 2A', age: 8, gender: 'female', attendance: 89 },
    { id: '6', name: 'Jacob Taylor', class: 'Grade 2B', age: 8, gender: 'male', attendance: 79 },
    { id: '7', name: 'Ava Anderson', class: 'Grade 3A', age: 9, gender: 'female', attendance: 94 },
    { id: '8', name: 'Mason Thomas', class: 'Grade 3B', age: 9, gender: 'male', attendance: 83 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Students</h2>
          <p className="text-muted-foreground">Manage and organize your students</p>
        </div>
        <Button onClick={() => setIsAddStudentOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Student
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Student Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search students..."
                  className="pl-9 w-full"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Classes</SelectItem>
                  <SelectItem value="pp1">PP1</SelectItem>
                  <SelectItem value="pp2">PP2</SelectItem>
                  <SelectItem value="pp3">PP3</SelectItem>
                  <SelectItem value="grade1">Grade 1</SelectItem>
                  <SelectItem value="grade2">Grade 2</SelectItem>
                  <SelectItem value="grade3">Grade 3</SelectItem>
                  <SelectItem value="grade4">Grade 4</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="rounded-md border">
            <div className="py-3 px-4 bg-muted/50 border-b flex items-center justify-between">
              <div className="text-sm font-medium">Students List</div>
              <div className="text-sm text-muted-foreground">Total: {studentData.length}</div>
            </div>
            
            <div className="divide-y">
              {studentData.map((student) => (
                <div key={student.id} className="px-4">
                  <StudentListItem {...student} />
                </div>
              ))}
            </div>
            
            <div className="py-3 px-4 bg-muted/50 border-t flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Showing 1-8 of 387 students</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Add Student Dialog */}
      <Dialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              Enter the student details. All fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name *
              </label>
              <Input id="firstName" placeholder="Enter first name" />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name *
              </label>
              <Input id="lastName" placeholder="Enter last name" />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="dob" className="text-sm font-medium">
                Date of Birth *
              </label>
              <Input id="dob" type="date" />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="gender" className="text-sm font-medium">
                Gender *
              </label>
              <Select>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2 col-span-2">
              <label htmlFor="class" className="text-sm font-medium">
                Assign to Class *
              </label>
              <Select>
                <SelectTrigger id="class">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pp1green">PP1 Green</SelectItem>
                  <SelectItem value="pp1blue">PP1 Blue</SelectItem>
                  <SelectItem value="pp2green">PP2 Green</SelectItem>
                  <SelectItem value="pp2blue">PP2 Blue</SelectItem>
                  <SelectItem value="pp3green">PP3 Green</SelectItem>
                  <SelectItem value="pp3blue">PP3 Blue</SelectItem>
                  <SelectItem value="grade1a">Grade 1A</SelectItem>
                  <SelectItem value="grade1b">Grade 1B</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2 col-span-2">
              <label htmlFor="parentName" className="text-sm font-medium">
                Parent/Guardian Name *
              </label>
              <Input id="parentName" placeholder="Enter parent/guardian name" />
            </div>
            
            <div className="grid gap-2 col-span-2">
              <label htmlFor="contact" className="text-sm font-medium">
                Contact Number *
              </label>
              <Input id="contact" placeholder="Enter contact number" />
            </div>
            
            <div className="grid gap-2 col-span-2">
              <label htmlFor="address" className="text-sm font-medium">
                Address
              </label>
              <Input id="address" placeholder="Enter address" />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddStudentOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={() => setIsAddStudentOpen(false)}>
              Add Student
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentsPage;
