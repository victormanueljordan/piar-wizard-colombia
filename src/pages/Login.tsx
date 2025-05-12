
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Logo from '@/components/Logo';
import AnimatedBackground from '@/components/AnimatedBackground';
import LoadingOverlay from '@/components/LoadingOverlay';
import { User, Lock } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };
    
    checkSession();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        throw error;
      }
      
      if (data.session) {
        localStorage.setItem('user', JSON.stringify({ 
          email: data.user.email, 
          role: 'docente',
          id: data.user.id
        }));
        toast.success("Iniciado sesión exitosamente");
        navigate('/dashboard');
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "Error al iniciar sesión. Por favor intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: 'docente'
          }
        }
      });
      
      if (error) throw error;
      
      toast.success("Registro exitoso. Por favor verifique su correo electrónico.");
    } catch (error: any) {
      console.error("Signup error:", error);
      toast.error(error.message || "Error al registrarse. Por favor intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <AnimatedBackground type="particles" intensity="low" />
      {loading && <LoadingOverlay />}
      
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 space-y-6 transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center space-y-2 animate-fade-in">
          <Logo className="mb-4 animate-scale-in" />
          <h1 className="text-xl font-medium text-gray-800">
            Sistema de gestión de Planes Individuales de Ajustes Razonables
          </h1>
        </div>
        
        <div className="bg-blue-50 rounded-md p-4 transition-all duration-300 hover:bg-blue-100">
          <h2 className="text-blue-700 font-medium mb-1">Inicia sesión con tu cuenta</h2>
          <p className="text-sm text-blue-600">
            Ingresa tus credenciales para acceder al sistema
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-piar-blue hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02]" 
            disabled={loading}
          >
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
        </form>
        
        <div className="text-center text-sm">
          <p className="text-gray-600">
            ¿No tienes una cuenta? 
            <Button 
              variant="link" 
              className="text-piar-blue pl-1 pb-0 transition-all duration-300 hover:text-blue-800"
              onClick={handleSignUp}
              disabled={loading}
            >
              Regístrate
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
