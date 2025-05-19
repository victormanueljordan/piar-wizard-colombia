
import React, { useEffect, useRef } from 'react';
import { BaseAnimationProps } from './types';

const GradientAnimation: React.FC<BaseAnimationProps> = ({ 
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
    let particleSpeed = 0.2;
    
    switch (intensity) {
      case 'medium':
        particleSpeed = 0.3;
        break;
      case 'high':
        particleSpeed = 0.4;
        break;
      default:
        particleSpeed = 0.1;
    }

    // Animated gradient
    let hue = 0;
    const gradientSpeed = particleSpeed * 0.5;
    
    const animate = () => {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Change hue over time for subtle animation
      hue = (hue + gradientSpeed) % 360;
      
      // Blue to light blue gradient
      gradient.addColorStop(0, `hsla(${210 + Math.sin(hue * 0.01) * 10}, 80%, 60%, 0.15)`);
      gradient.addColorStop(1, `hsla(${230 + Math.cos(hue * 0.01) * 10}, 80%, 70%, 0.1)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
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

export default GradientAnimation;
