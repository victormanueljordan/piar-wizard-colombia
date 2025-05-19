import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from "@/integrations/supabase/client";
import Logo from '@/components/Logo';
import { Lock, Mail, LogIn, UserPlus } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
const LoginSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        data,
        error
      } = await supabase.auth.signInWithPassword({
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
      const {
        data,
        error
      } = await supabase.auth.signUp({
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
  return <section className="section bg-gradient-to-br from-blue-50 via-white to-green-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ScrollReveal className="flex-1 hidden md:block">
            <div className="hover-card p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">Beneficios para docentes</h3>
              <ul className="space-y-5">
                {["Reduce tiempo de creación de PIAR hasta en un 70%", "Plantillas personalizadas según la necesidad del estudiante", "Sugerencias basadas en casos similares", "Guía paso a paso con ejemplos prácticos"].map((benefit, i) => <li key={i} className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-piar-blue to-piar-green rounded-full p-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>)}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-piar-blue">
                <p className="text-blue-800">&quot;Una solución pensada para cientos de instituciones que buscan transformar la inclusión con ayuda de la tecnología.</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="flex-1" delay={300}>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 space-y-6 border border-gray-100">
              <div className="flex flex-col items-center space-y-2">
                <Logo className="mb-4 h-12 w-auto" />
                <h2 className="text-2xl font-bold text-gray-800 font-heading">Accede a tu cuenta</h2>
                <p className="text-gray-600 text-center">
                  Ingresa tus credenciales para acceder al sistema
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-piar-blue" />
                    Correo electrónico
                  </Label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" value={email} onChange={e => setEmail(e.target.value)} className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-piar-blue" />
                    Contraseña
                  </Label>
                  <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="transition-all duration-200 focus:ring-2 focus:ring-blue-500" required />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-piar-blue to-blue-700 hover:from-piar-blue/90 hover:to-blue-700/90 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg rounded-md flex items-center justify-center gap-2 h-11" disabled={loading}>
                  <LogIn className="h-4 w-4" />
                  {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                </Button>
              </form>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">O regístrate</span>
                </div>
              </div>
              
              <Button className="w-full bg-white text-piar-blue border-2 border-piar-blue hover:bg-blue-50 font-medium transition-all duration-300 rounded-md flex items-center justify-center gap-2 h-11" onClick={handleSignUp} disabled={loading}>
                <UserPlus className="h-4 w-4" />
                {loading ? "Procesando..." : "Crear cuenta nueva"}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};
export default LoginSection;