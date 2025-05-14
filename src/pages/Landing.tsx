
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { supabase } from "@/integrations/supabase/client";
import { ArrowDown, Award, Check, Phone, Play, Youtube } from 'lucide-react';
import Logo from '@/components/Logo';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPitchVideo, setShowPitchVideo] = useState(false);
  const [showAwardVideo, setShowAwardVideo] = useState(false);
  
  // Refs for smooth scrolling
  const loginRef = useRef<HTMLDivElement>(null);
  const problemaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  
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

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header with contact number */}
      <header className="w-full bg-white shadow-sm py-3 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Logo className="h-10 w-auto" />
          <div className="flex items-center gap-3">
            <div className="bg-piar-blue/10 p-2 rounded-full animate-pulse">
              <Phone size={18} className="text-piar-blue"/>
            </div>
            <span className="text-sm md:text-base font-medium text-gray-700">+1 (215) 398 1983</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[92vh] flex flex-col justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-4">
          <div className="flex-1 space-y-6 animate-fade-in z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Transformamos la inclusión educativa con tecnología
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              PIAR123 es la plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables (PIAR) para docentes, instituciones y familias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-piar-blue hover:bg-blue-700 text-white font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
                onClick={() => scrollToRef(loginRef)}
              >
                Ingresar al sistema
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-piar-blue text-piar-blue hover:bg-piar-blue/10 font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() => scrollToRef(videoRef)}
              >
                Ver nuestro pitch
                <Play className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 p-4 animate-scale-in">
            <div className="bg-gradient-to-br from-piar-blue/20 to-piar-green/20 p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Estudiantes utilizando PIAR123" 
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" 
              />
              <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg">
                <p className="text-lg font-medium text-piar-blue">
                  "PIAR123 transformó nuestra manera de crear planes de inclusión"
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  - María González, Docente
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-white shadow-md hover:shadow-lg h-12 w-12"
            onClick={() => scrollToRef(problemaRef)}
          >
            <ArrowDown className="text-piar-blue h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={problemaRef} className="py-24 px-4 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-piar-yellow/5 to-piar-yellow/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-piar-blue to-piar-green">
              Una solución al alcance de los docentes
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Docentes sin acompañamiento para construir los PIAR",
                image: "/placeholder.svg",
                alt: "Docente trabajando solo"
              },
              {
                text: "Exceso de carga administrativa y poco tiempo",
                image: "/placeholder.svg",
                alt: "Docente con muchos papeles"
              },
              {
                text: "Dificultad para cumplir con el Decreto 1421 de 2017",
                image: "/placeholder.svg",
                alt: "Documento de regulación"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="bg-piar-blue/10 p-3 rounded-lg mb-4 flex justify-center">
                  <img src={item.image} alt={item.alt} className="h-32 w-auto object-cover rounded" />
                </div>
                <div className="flex items-start gap-3 mt-4">
                  <div className="bg-gradient-to-br from-piar-blue to-piar-green p-2 rounded-full flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-piar-blue/20 to-piar-green/20 p-6 rounded-xl shadow-md max-w-2xl mx-auto transform hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
            <p className="text-2xl font-medium text-gray-700 italic text-center">
              "Con PIAR123, cada estudiante recibe lo que necesita."
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        {/* Animated circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-piar-blue opacity-5 rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-piar-green opacity-5 rounded-full"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Una herramienta inteligente, simple y efectiva</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "IA Asistente",
                description: "Sugerencias automáticas con IA que facilitan la creación de planes personalizados",
                color: "from-blue-500 to-purple-600",
                icon: "/placeholder.svg"
              },
              {
                title: "Gestión Centralizada",
                description: "Gestión centralizada por institución y docente que mejora la coordinación",
                color: "from-green-500 to-teal-600",
                icon: "/placeholder.svg"
              },
              {
                title: "Exportación a PDF",
                description: "Exportación de PIAR en PDF listos para presentar en cualquier momento",
                color: "from-yellow-500 to-orange-600",
                icon: "/placeholder.svg"
              },
              {
                title: "Seguridad Garantizada",
                description: "Plataforma segura y fácil de usar que protege la información sensible",
                color: "from-red-500 to-pink-600",
                icon: "/placeholder.svg"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      <img src={feature.icon} alt={feature.title} className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoRef} className="py-24 px-4 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Conoce nuestra historia</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pitch Video */}
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-center">Nuestro Pitch</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/ZWpj-XXPno8"
                  title="PIAR123 Pitch Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-300 text-center">
                Descubre la visión detrás de PIAR123 y cómo estamos transformando la educación inclusiva.
              </p>
            </div>
            
            {/* Award Video */}
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-center">Premio Hackathon</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/8UVhvfzC0bI"
                  title="PIAR123 Award Ceremony"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="mt-4 text-gray-300 text-center">
                PIAR123 fue galardonado en la Hackathon LATAM de IA entre más de 800 participantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-piar-yellow/10 to-piar-blue/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-piar-yellow to-piar-blue">
                  Ganador Hackathon LATAM de IA
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                PIAR123 fue el proyecto ganador entre más de 800 participantes en la Hackathon de Inteligencia Artificial realizada en Latinoamérica. Nuestro enfoque innovador en la educación inclusiva utilizando tecnología de vanguardia nos destacó entre los participantes.
              </p>
              <div className="bg-gradient-to-r from-piar-yellow/20 to-piar-blue/20 p-6 rounded-xl shadow-md border-l-4 border-piar-yellow transform hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
                <p className="italic text-gray-700 leading-relaxed">
                  "PIAR123 representa una innovación educativa significativa que tiene el potencial de transformar la forma en que se implementan los planes de inclusión en toda Latinoamérica."
                </p>
                <p className="mt-4 font-medium text-right text-gray-800">- Jurado de la Hackathon LATAM de IA</p>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-piar-yellow/30 to-piar-blue/30 rounded-full blur-3xl -z-10"></div>
                <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                  <Award className="h-48 w-48 text-piar-yellow drop-shadow-[0_0_15px_rgba(243,199,28,0.6)] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-piar-blue to-blue-700 text-white text-center relative overflow-hidden">
        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white opacity-10 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
        
        <div className="container mx-auto space-y-8 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">¿Eres docente o parte de una institución educativa?</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Únete a los educadores que ya están transformando la inclusión educativa con PIAR123
          </p>
          <Button 
            onClick={() => scrollToRef(loginRef)}
            size="lg" 
            className="bg-white text-piar-blue hover:bg-gray-100 font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Inicia sesión en PIAR123
          </Button>
        </div>
      </section>

      {/* Login Section */}
      <section ref={loginRef} id="login" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 hidden md:block">
              <div className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-[1.01] hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Beneficios para docentes</h3>
                <ul className="space-y-4">
                  {[
                    "Reduce tiempo de creación de PIAR hasta en un 70%",
                    "Plantillas personalizadas según la necesidad del estudiante",
                    "Sugerencias basadas en casos similares",
                    "Guía paso a paso con ejemplos prácticos"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="bg-gradient-to-r from-piar-blue to-piar-green rounded-full p-1 mt-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Más de 200 instituciones educativas ya confían en PIAR123 para sus procesos de inclusión.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 space-y-6">
                <div className="flex flex-col items-center space-y-2">
                  <Logo className="mb-4 h-12 w-auto" />
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
                    className="w-full bg-gradient-to-r from-piar-blue to-blue-700 hover:from-piar-blue/90 hover:to-blue-700/90 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg" 
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Logo className="h-10 w-auto mb-6 md:mb-0" />
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-full">
                  <Phone size={18} className="text-white"/>
                </div>
                <span className="text-sm md:text-base">+1 (215) 398 1983</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@PIAR123" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Acerca de PIAR123</h3>
                <p className="text-sm text-gray-400">
                  PIAR123 es una plataforma inteligente que facilita la creación de Planes Individuales de Ajustes Razonables para docentes, instituciones y familias.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Testimonios</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">© 2025 PIAR123. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
