
import React, { useEffect, useRef } from 'react';
import { BaseAnimationProps } from './types';

const SubtleGradientAnimation: React.FC<BaseAnimationProps> = ({ 
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

    // Subtle gradient background
    let hue = 0;
    const gradientSpeed = intensity === 'low' ? 0.03 : 
                          intensity === 'medium' ? 0.05 : 0.08;
    
    const animate = () => {
      // Create subtle gradient
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      
      // Very subtle hue shift over time
      hue = (hue + gradientSpeed) % 360;
      
      gradient.addColorStop(0, `hsla(${210 + Math.sin(hue * 0.01) * 5}, 100%, 98%, 0.7)`);
      gradient.addColorStop(1, `hsla(${220 + Math.cos(hue * 0.01) * 5}, 100%, 95%, 0.5)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle light points
      const lightPoints = 5;
      for (let i = 0; i < lightPoints; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(hue * 0.01 + i));
        const y = canvas.height * (0.2 + 0.6 * Math.cos(hue * 0.01 + i * 2));
        const radius = Math.min(canvas.width, canvas.height) * 0.1;
        
        const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        pointGradient.addColorStop(0, `hsla(${210 + i * 20}, 100%, 80%, 0.1)`);
        pointGradient.addColorStop(1, `hsla(${210 + i * 20}, 100%, 80%, 0)`);
        
        ctx.fillStyle = pointGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
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

export default SubtleGradientAnimation;
