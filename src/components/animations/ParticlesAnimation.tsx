
import React, { useEffect, useRef } from 'react';
import { BaseAnimationProps } from './types';

const ParticlesAnimation: React.FC<BaseAnimationProps> = ({ 
  intensity = 'low'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Configuration based on intensity
    let particleOpacity = 0.1;
    let particleSpeed = 0.2;
    let particleColors = ['rgba(59, 130, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(86, 190, 126, 0.3)'];
    
    switch (intensity) {
      case 'medium':
        particleOpacity = 0.15;
        particleSpeed = 0.3;
        break;
      case 'high':
        particleOpacity = 0.12;
        particleSpeed = 0.4;
        break;
      default:
        particleOpacity = 0.08;
        particleSpeed = 0.1;
    }

    // Particle system
    const particleCount = 50;
    
    // Create particles
    const particles: { 
      x: number; 
      y: number; 
      size: number; 
      speedX: number; 
      speedY: number;
      color: string;
      opacity: number;
      pulse: number;
    }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 1,
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        opacity: Math.random() * particleOpacity + 0.05,
        pulse: 0
      });
    }

    // Animation function
    const animate = () => {
      // Apply a semi-transparent clear to create trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        // Update pulse (for subtle size oscillation)
        particle.pulse += 0.01;
        const pulseFactor = 1 + Math.sin(particle.pulse) * 0.1;
        
        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(
          particle.x, 
          particle.y, 
          particle.size * pulseFactor, 
          0, 
          Math.PI * 2
        );
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges instead of bouncing
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticlesAnimation;
