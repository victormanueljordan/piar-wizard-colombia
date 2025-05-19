
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PiarForm from "./pages/PiarForm";
import StudentInitialForm from "./pages/StudentInitialForm";
import PiarSimulator from "./pages/PiarSimulator";
import NotFound from "./pages/NotFound";
import LoadingOverlay from "@/components/LoadingOverlay";
import AIAssistant from "@/components/ai-assistant/AIAssistant";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setLoading(false);
    };
    
    checkAuth();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      setLoading(false);
    });
    
    return () => subscription.unsubscribe();
  }, []);
  
  if (loading) {
    return <LoadingOverlay message="Verificando sesión..." />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <>
      {children}
      <AIAssistant />
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for initial authentication
    const checkAuth = async () => {
      await supabase.auth.getSession();
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };
    
    checkAuth();
  }, []);
  
  if (isLoading) {
    return <LoadingOverlay message="Iniciando PIAR123..." />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/crear-piar" 
              element={
                <ProtectedRoute>
                  <PiarForm />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/estudiante-inicial" 
              element={
                <ProtectedRoute>
                  <StudentInitialForm />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/simulador-piar" 
              element={
                <ProtectedRoute>
                  <PiarSimulator />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/piar/:id" 
              element={
                <ProtectedRoute>
                  <PiarForm />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/logout" 
              element={<LogoutHandler />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Logout handler component
const LogoutHandler = () => {
  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();
      localStorage.removeItem("user");
      window.location.href = "/login";
    };
    
    logout();
  }, []);
  
  return <LoadingOverlay message="Cerrando sesión..." />;
};

export default App;
