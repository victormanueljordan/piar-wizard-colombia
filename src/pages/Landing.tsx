
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from "@/integrations/supabase/client";
import { ArrowDown, Award, Check, Phone } from 'lucide-react';
import Logo from '@/components/Logo';

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
      {/* Header with contact number */}
      <header className="w-full bg-white shadow-sm py-3 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Logo className="h-10 w-auto" />
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-piar-blue"/>
            <span className="text-sm md:text-base font-medium text-gray-700">+1 (215) 398 1983</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[92vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Transformamos la inclusión educativa con tecnología
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              PIAR123 es la plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables (PIAR) para docentes, instituciones y familias.
            </p>
            <Button 
              size="lg"
              className="bg-piar-blue hover:bg-blue-700 text-white font-medium text-lg transition-all duration-300 flex items-center gap-2"
              onClick={() => scrollToSection('login')}
            >
              Ingresar al sistema
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 animate-scale-in">
            <img 
              src="/placeholder.svg" 
              alt="Ilustración educativa con IA" 
              className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="text-piar-blue h-8 w-8" onClick={() => scrollToSection('problema')} />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Una solución al alcance de los docentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Docentes sin acompañamiento para construir los PIAR",
              "Exceso de carga administrativa y poco tiempo",
              "Dificultad para cumplir con el Decreto 1421 de 2017"
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className="bg-piar-blue/10 p-3 rounded-full mb-4">
                  <Check className="h-8 w-8 text-piar-blue" />
                </div>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-piar-blue/5 border-l-4 border-piar-blue p-6 rounded-r-lg">
            <p className="text-2xl font-medium text-gray-700 italic text-center">
              "Con PIAR123, cada estudiante recibe lo que necesita."
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Una herramienta inteligente, simple y efectiva</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Sugerencias automáticas con IA",
              "Gestión centralizada por institución y docente",
              "Exportación de PIAR en PDF listos para presentar",
              "Plataforma segura y fácil de usar"
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="h-1 w-1/3 bg-gradient-to-r from-piar-blue to-piar-green mb-4"></div>
                <h3 className="font-medium text-lg text-gray-800 mb-2">Característica {index + 1}</h3>
                <p className="text-gray-600 flex-grow">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-piar-blue/10 to-piar-yellow/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ganador Hackathon LATAM de IA</h2>
              <p className="text-lg text-gray-600 mb-6">
                PIAR123 fue el proyecto ganador entre más de 800 participantes en la Hackathon de Inteligencia Artificial realizada en Latinoamérica.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-piar-yellow">
                <p className="italic text-gray-700">
                  "PIAR123 representa una innovación educativa significativa que tiene el potencial de transformar la forma en que se implementan los planes de inclusión en toda Latinoamérica."
                </p>
                <p className="mt-2 font-medium text-right text-gray-800">- Jurado de la Hackathon LATAM de IA</p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center order-1 md:order-2">
              <div className="relative">
                <Award className="h-40 w-40 text-piar-yellow animate-pulse" />
                <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-piar-blue text-white text-center">
        <div className="container mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">¿Eres docente o parte de una institución educativa?</h2>
          <Button 
            onClick={() => scrollToSection('login')}
            size="lg" 
            className="bg-white text-piar-blue hover:bg-gray-100 font-bold transition-all duration-300"
          >
            Inicia sesión en PIAR123
          </Button>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-md">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <Logo className="mb-4" />
              <h2 className="text-2xl font-bold text-gray-800">Accede a tu cuenta</h2>
              <p className="text-gray-600 text-center">
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
                className="w-full bg-piar-blue hover:bg-blue-700 transition-all duration-300" 
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
                  className="text-piar-blue pl-1 pb-0"
                  onClick={handleSignUp}
                  disabled={loading}
                >
                  Regístrate
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo className="h-8 w-auto mb-4 md:mb-0" />
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white"/>
              <span className="text-sm md:text-base">+1 (215) 398 1983</span>
            </div>
            <p className="text-sm mt-4 md:mt-0">© 2025 PIAR123. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
