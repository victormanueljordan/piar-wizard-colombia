import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  type: 'subtle-gradient' | 'particles' | 'gradient';
  intensity?: 'low' | 'medium' | 'high';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  type = 'subtle-gradient',
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

    if (type === 'subtle-gradient') {
      // Subtle gradient background
      let hue = 0;
      const gradientSpeed = 0.05;
      
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
    } else if (type === 'particles') {
      // Particle system
      if (type === 'particles') {
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
      }
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
        gradient.addColorStop(0, `hsla(${210 + Math.sin(hue * 0.01) * 10}, 80%, 60%, 0.15)`);
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
