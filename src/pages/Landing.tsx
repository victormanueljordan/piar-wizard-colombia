
import React, { useRef, useEffect } from 'react';
import HeaderSection from '@/components/landing/HeaderSection';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import VideoSection from '@/components/landing/VideoSection';
import RecognitionSection from '@/components/landing/RecognitionSection';
import CallToAction from '@/components/landing/CallToAction';
import LoginSection from '@/components/landing/LoginSection';
import FooterSection from '@/components/landing/FooterSection';
import CoFoundersSection from '@/components/landing/CoFoundersSection';
import StickyCTA from '@/components/landing/StickyCTA';
import AnimatedBackground from '@/components/AnimatedBackground';

const Landing = () => {
  // Refs for smooth scrolling
  const loginRef = useRef<HTMLDivElement>(null);
  const problemaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('reveal-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      {/* Subtle animated background */}
      <AnimatedBackground type="subtle-gradient" intensity="low" />
      
      {/* Header with WhatsApp number */}
      <HeaderSection />

      {/* Hero Section */}
      <HeroSection 
        scrollToLogin={() => scrollToRef(loginRef)} 
        scrollToProblem={() => scrollToRef(problemaRef)}
        scrollToVideo={() => scrollToRef(videoRef)}
      />

      {/* Problem Section */}
      <div ref={problemaRef}>
        <ProblemSection />
      </div>

      {/* Features Section */}
      <FeaturesSection />
      
      {/* Co-founders Section */}
      <CoFoundersSection />

      {/* Video Section */}
      <div ref={videoRef}>
        <VideoSection />
      </div>

      {/* Recognition Section */}
      <RecognitionSection />

      {/* Call to Action */}
      <CallToAction scrollToLogin={() => scrollToRef(loginRef)} />

      {/* Login Section */}
      <div ref={loginRef} id="login">
        <LoginSection />
      </div>

      {/* Footer */}
      <FooterSection />
      
      {/* Sticky CTA Button */}
      <StickyCTA scrollToLogin={() => scrollToRef(loginRef)} />
    </div>
  );
};

export default Landing;
