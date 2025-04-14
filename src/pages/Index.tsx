
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Calendar, School, ChevronRight, BarChart4, Bell, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-kiddy-background">
      {/* Navigation Bar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-kiddy-blue to-kiddy-purple flex items-center justify-center">
                <School className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">KiddyClass</span>
            </div>
            <div className="flex gap-4">
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
        <div className="flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-kiddy-blue to-kiddy-purple flex items-center justify-center">
            <School className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to KiddyClass</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
          A comprehensive management system for kindergartens and schools. 
          Manage students, teachers, classes and more with our easy-to-use platform.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Link to="/auth">
            <Button size="lg" className="gap-2">
              Login as Admin
              <Users className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="lg" variant="outline" className="gap-2">
              Login as Teacher
              <GraduationCap className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About School Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Our School</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              KiddyClass is a modern educational institution dedicated to providing quality education
              in a nurturing environment. Our school management system helps us achieve excellence in all areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a stimulating learning environment that encourages children to reach their full potential,
                both academically and personally, while our management system ensures smooth operation of all school activities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Child-centered educational approach</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Qualified and dedicated teaching staff</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>Safe and supportive environment</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-64 flex items-center justify-center">
              <p className="text-muted-foreground">School Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="h-8 w-8" />}
              title="Student Management"
              description="Track student progress, attendance, and personal information all in one place."
            />
            <FeatureCard 
              icon={<GraduationCap className="h-8 w-8" />}
              title="Teacher Administration"
              description="Manage teacher schedules, assignments, and professional development."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8" />}
              title="Class Organization"
              description="Create and manage classes, assign teachers, and track curriculum progress."
            />
            <FeatureCard 
              icon={<Calendar className="h-8 w-8" />}
              title="Event Planning"
              description="Schedule and coordinate school events, parent-teacher meetings, and activities."
            />
            <FeatureCard 
              icon={<BarChart4 className="h-8 w-8" />}
              title="School Analytics"
              description="Gain insights into school performance with comprehensive reports and analytics."
            />
            <FeatureCard 
              icon={<Bell className="h-8 w-8" />}
              title="Notifications"
              description="Keep parents, teachers and administrators informed about important events and updates."
            />
          </div>
        </div>
      </section>

      {/* Management System Benefits */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Management System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                For Administrators
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Centralized dashboard for school-wide management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Streamlined communication with staff and parents</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Comprehensive reporting and analytics tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Resource allocation and budget management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                For Teachers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Easy attendance tracking and grading systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Student progress monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Lesson planning and curriculum management tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                  <span>Direct communication channels with parents</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/auth">
              <Button size="lg" className="gap-2">
                Get Started Today
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KiddyClass Control Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-background p-6 rounded-lg shadow-sm border border-border flex flex-col items-center text-center">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
