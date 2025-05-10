
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Logo from '@/components/Logo';
import AnimatedBackground from '@/components/AnimatedBackground';
import LoadingOverlay from '@/components/LoadingOverlay';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('docente@piar123.com');
  const [password, setPassword] = useState('demo123');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // This is a placeholder for Supabase integration
      // In a real implementation, this would connect to Supabase auth
      console.log("Login credentials:", { email, password });
      
      // Simulate successful login
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({ email, role: 'docente' }));
        toast.success("Iniciado sesión exitosamente");
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Error al iniciar sesión. Por favor intente de nuevo.");
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
        
        {/* Demo credentials card */}
        <div className="bg-green-50 border border-green-100 rounded-md p-4 transition-all duration-300 hover:bg-green-100">
          <h3 className="text-green-700 font-medium mb-1">Credenciales de demostración</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium text-gray-600">Usuario:</div>
            <div className="text-green-800">docente@piar123.com</div>
            <div className="font-medium text-gray-600">Contraseña:</div>
            <div className="text-green-800">demo123</div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="docente@piar123.com"
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
            <Button variant="link" className="text-piar-blue pl-1 pb-0 transition-all duration-300 hover:text-blue-800">
              Regístrate
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
