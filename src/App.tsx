
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import StudentsPage from "./pages/StudentsPage";
import TeachersPage from "./pages/TeachersPage";
import ClassesPage from "./pages/ClassesPage";
import SettingsPage from "./pages/SettingsPage";
import ReportsPage from "./pages/ReportsPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import Index from "./pages/Index";

// Create a new QueryClient instance outside of component to avoid recreating on every render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

// Role-based protected route
const RoleProtectedRoute = ({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode,
  allowedRoles: string[]
}) => {
  const { user, profile, loading } = useAuth();
  
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  if (!profile || !allowedRoles.includes(profile.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { user } = useAuth();
  
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={user ? <Navigate to="/dashboard" /> : <AuthPage />} />
      
      {/* Protected routes - accessible to all authenticated users */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <MainLayout>
            <Dashboard />
          </MainLayout>
        </ProtectedRoute>
      } />
      
      <Route path="/settings" element={
        <ProtectedRoute>
          <MainLayout>
            <SettingsPage />
          </MainLayout>
        </ProtectedRoute>
      } />
      
      {/* Admin-only routes */}
      <Route path="/teachers" element={
        <RoleProtectedRoute allowedRoles={['admin']}>
          <MainLayout>
            <TeachersPage />
          </MainLayout>
        </RoleProtectedRoute>
      } />
      
      <Route path="/reports" element={
        <RoleProtectedRoute allowedRoles={['admin']}>
          <MainLayout>
            <ReportsPage />
          </MainLayout>
        </RoleProtectedRoute>
      } />
      
      {/* Routes accessible to both admin and teacher */}
      <Route path="/students" element={
        <RoleProtectedRoute allowedRoles={['admin', 'teacher']}>
          <MainLayout>
            <StudentsPage />
          </MainLayout>
        </RoleProtectedRoute>
      } />
      
      <Route path="/classes" element={
        <RoleProtectedRoute allowedRoles={['admin', 'teacher']}>
          <MainLayout>
            <ClassesPage />
          </MainLayout>
        </RoleProtectedRoute>
      } />
      
      {/* Teacher-only routes */}
      <Route path="/assignments" element={
        <RoleProtectedRoute allowedRoles={['teacher']}>
          <MainLayout>
            <AssignmentsPage />
          </MainLayout>
        </RoleProtectedRoute>
      } />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Use a separate App component to ensure correct order of providers
const App = () => (
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <TooltipProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <Sonner />
            <AppRoutes />
          </QueryClientProvider>
        </TooltipProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

export default App;
