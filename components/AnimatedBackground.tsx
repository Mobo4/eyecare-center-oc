'use client';

import React, { useEffect, useRef } from 'react';

interface Circle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  pulseDirection: number;
}

interface AnimatedBackgroundProps {
  numberOfCircles?: number;
  colorScheme?: 'purple' | 'blue' | 'green' | 'teal';
}

const colorSchemes = {
  purple: ['#e5deff', '#d1c6ff', '#b5a4ff', '#a69aff'],
  blue: ['#e0f2ff', '#c2e5ff', '#a0d7ff', '#6ab0e3'],
  green: ['#e3ffd3', '#caf7b6', '#b6e8a2', '#9ad18b'],
  teal: ['#d9f8f8', '#befaf5', '#a0ece8', '#8bd1cf'],
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  numberOfCircles = 15,
  colorScheme = 'blue',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<Circle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = colorSchemes[colorScheme];
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      
      if (circlesRef.current.length === 0) {
        circlesRef.current = Array.from({ length: numberOfCircles }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 20 + Math.random() * 80,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.7,
          speedY: (Math.random() - 0.5) * 0.7,
          opacity: 0.1 + Math.random() * 0.3,
          pulseSpeed: 0.002 + Math.random() * 0.006,
          pulseDirection: Math.random() > 0.5 ? 1 : -1,
        }));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      isHoveringRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize();

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      circlesRef.current.forEach(circle => {
        circle.x += circle.speedX;
        circle.y += circle.speedY;
        
        circle.opacity += circle.pulseDirection * circle.pulseSpeed;
        if (circle.opacity > 0.4) {
          circle.opacity = 0.4;
          circle.pulseDirection = -1;
        } else if (circle.opacity < 0.1) {
          circle.opacity = 0.1;
          circle.pulseDirection = 1;
        }
        
        if (isHoveringRef.current) {
          const dx = mousePos.current.x - circle.x;
          const dy = mousePos.current.y - circle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            const force = 0.02;
            circle.x += (dx / distance) * force;
            circle.y += (dy / distance) * force;
          }
        }
        
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.speedX = -circle.speedX;
        }
        
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.speedY = -circle.speedY;
        }
        
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color + Math.round(circle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorScheme, numberOfCircles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;

