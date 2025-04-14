
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart2, Download, FileText, PieChart, TrendingUp, Users, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ReportsPage: React.FC = () => {
  const reportTypes = [
    {
      id: 'attendance',
      title: 'Attendance Reports',
      description: 'Track student and teacher attendance records',
      icon: <Users className="h-5 w-5" />,
      reports: [
        { id: 'daily-attendance', name: 'Daily Attendance' },
        { id: 'monthly-attendance', name: 'Monthly Attendance Summary' },
        { id: 'absence-report', name: 'Student Absence Report' },
        { id: 'late-arrivals', name: 'Late Arrivals Report' }
      ]
    },
    {
      id: 'academic',
      title: 'Academic Reports',
      description: 'Student academic performance and progress tracking',
      icon: <TrendingUp className="h-5 w-5" />,
      reports: [
        { id: 'grade-report', name: 'Grade Report' },
        { id: 'progress-report', name: 'Student Progress Report' },
        { id: 'class-performance', name: 'Class Performance Analysis' },
        { id: 'subject-analysis', name: 'Subject Performance Analysis' }
      ]
    },
    {
      id: 'administrative',
      title: 'Administrative Reports',
      description: 'School operations and management reports',
      icon: <FileText className="h-5 w-5" />,
      reports: [
        { id: 'enrollment-report', name: 'Enrollment Statistics' },
        { id: 'staff-report', name: 'Staff Summary Report' },
        { id: 'financial-summary', name: 'Financial Summary' },
        { id: 'resource-usage', name: 'Resource Usage Report' }
      ]
    }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <p className="text-muted-foreground">Generate and view school management reports</p>
      </div>
      
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Select defaultValue="current">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Time Period</SelectLabel>
                <SelectItem value="current">Current Term</SelectItem>
                <SelectItem value="previous">Previous Term</SelectItem>
                <SelectItem value="year">Current Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Grade" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Grade Level</SelectLabel>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="pp">Pre-Primary (PP1-PP3)</SelectItem>
                <SelectItem value="lower">Lower Primary (G1-G3)</SelectItem>
                <SelectItem value="upper">Upper Primary (G4-G8)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Set Custom Date Range
        </Button>
      </div>
      
      <Tabs defaultValue="attendance" className="space-y-6">
        <TabsList>
          {reportTypes.map((type) => (
            <TabsTrigger key={type.id} value={type.id} className="flex items-center gap-2">
              {type.icon}
              <span>{type.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {reportTypes.map((type) => (
          <TabsContent key={type.id} value={type.id} className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  {type.reports.map((report) => (
                    <Card key={report.id} className="overflow-hidden">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">{report.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="flex items-center justify-center h-40 bg-muted/20">
                          {report.id.includes('attendance') ? (
                            <BarChart2 className="h-16 w-16 text-muted-foreground/30" />
                          ) : report.id.includes('grade') || report.id.includes('performance') ? (
                            <TrendingUp className="h-16 w-16 text-muted-foreground/30" />
                          ) : (
                            <PieChart className="h-16 w-16 text-muted-foreground/30" />
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 pt-2 pb-2 bg-muted/10">
                        <span className="text-sm text-muted-foreground">Last updated: Today</span>
                        <Button variant="ghost" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Generate
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent {type.title}</CardTitle>
                <CardDescription>Previously generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{type.reports[i-1].name}</p>
                          <p className="text-xs text-muted-foreground">Generated on April {i+3}, 2025</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
          <CardDescription>Reports that are automatically generated on schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-kiddy-blue/10 p-2 rounded-md">
                  <Calendar className="h-5 w-5 text-kiddy-blue" />
                </div>
                <div>
                  <p className="font-medium">Weekly Attendance Summary</p>
                  <p className="text-xs text-muted-foreground">Every Friday at 4:00 PM</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Edit Schedule</Button>
            </div>
            
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-kiddy-green/10 p-2 rounded-md">
                  <Calendar className="h-5 w-5 text-kiddy-green" />
                </div>
                <div>
                  <p className="font-medium">Monthly Academic Progress</p>
                  <p className="text-xs text-muted-foreground">Last day of each month</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Edit Schedule</Button>
            </div>
            
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-kiddy-coral/10 p-2 rounded-md">
                  <Calendar className="h-5 w-5 text-kiddy-coral" />
                </div>
                <div>
                  <p className="font-medium">Term Financial Summary</p>
                  <p className="text-xs text-muted-foreground">End of each term</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Edit Schedule</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;
