
import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  type: 'particles' | 'gradient';
  intensity?: 'low' | 'medium' | 'high';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  type = 'particles',
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

    // Particle configuration based on intensity
    let particleCount = 20;
    let particleOpacity = 0.1;
    let particleSpeed = 0.2;
    
    switch (intensity) {
      case 'medium':
        particleCount = 40;
        particleOpacity = 0.15;
        particleSpeed = 0.4;
        break;
      case 'high':
        particleCount = 70;
        particleOpacity = 0.2;
        particleSpeed = 0.6;
        break;
      default:
        particleCount = 20;
        particleOpacity = 0.1;
        particleSpeed = 0.2;
    }

    // Particle system
    if (type === 'particles') {
      // Create particles
      const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * particleSpeed,
          speedY: (Math.random() - 0.5) * particleSpeed
        });
      }

      // Animation function
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw and update particles
        particles.forEach(particle => {
          // Draw particle
          ctx.fillStyle = `rgba(59, 130, 246, ${particleOpacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Update position
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Bounce off edges
          if (particle.x <= 0 || particle.x >= canvas.width) {
            particle.speedX = -particle.speedX;
          }
          
          if (particle.y <= 0 || particle.y >= canvas.height) {
            particle.speedY = -particle.speedY;
          }
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    } else if (type === 'gradient') {
      // Animated gradient
      let hue = 0;
      const gradientSpeed = particleSpeed * 0.5;
      
      const animate = () => {
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        
        // Change hue over time for subtle animation
        hue = (hue + gradientSpeed) % 360;
        
        // Blue to light blue gradient
        gradient.addColorStop(0, `hsla(${210 + Math.sin(hue * 0.01) * 10}, 80%, 60%, 0.2)`);
        gradient.addColorStop(1, `hsla(${230 + Math.cos(hue * 0.01) * 10}, 80%, 70%, 0.1)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [type, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
