
import React, { useRef } from 'react';
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

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header with contact number */}
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
      <div ref={loginRef}>
        <LoginSection />
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Landing;
