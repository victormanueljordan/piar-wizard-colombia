
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PiarForm from "./pages/PiarForm";
import NotFound from "./pages/NotFound";
import LoadingOverlay from "@/components/LoadingOverlay";
import AIAssistant from "@/components/ai-assistant/AIAssistant";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // In a real implementation, this would check with Supabase
  const isAuthenticated = localStorage.getItem("user") !== null;
  
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
    // Simulate checking for authentication
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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
            <Route path="/" element={<Navigate to="/login" replace />} />
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

// Simple logout handler component
const LogoutHandler = () => {
  useEffect(() => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }, []);
  
  return <LoadingOverlay message="Cerrando sesión..." />;
};

export default App;
