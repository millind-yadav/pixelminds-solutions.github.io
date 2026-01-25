import { useEffect, useRef } from 'react';

/**
 * AnimatedBackground Component
 * 
 * Cinematic cascading bokeh pixel rain effect.
 * Electric blue and violet with volumetric glow and depth of field.
 */
function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Bokeh particle class (soft circles)
    class BokehParticle {
      constructor() {
        this.reset();
        // Start at random Y position initially
        this.y = Math.random() * canvas.height * 1.5;
      }

      reset() {
        // Position - spread across width with some clustering
        this.x = Math.random() * canvas.width;
        this.y = -50 - Math.random() * 200;
        
        // Depth (0 = far/blurry, 1 = close/sharp)
        this.depth = Math.random();
        
        // Size based on depth (bokeh effect - far = bigger blur)
        this.baseSize = this.depth < 0.3 
          ? 15 + Math.random() * 25  // Far - large blurry bokeh
          : this.depth < 0.6 
            ? 6 + Math.random() * 12  // Mid
            : 2 + Math.random() * 6;   // Close - small sharp
        
        this.size = this.baseSize;
        
        // Speed based on depth (parallax)
        this.speed = 0.2 + this.depth * 0.8;
        
        // Color - blue to violet spectrum
        const colorChoice = Math.random();
        if (colorChoice < 0.4) {
          // Electric blue
          this.color = { r: 59 + Math.random() * 40, g: 130 + Math.random() * 50, b: 246 };
        } else if (colorChoice < 0.7) {
          // Cyan blue
          this.color = { r: 56, g: 189 + Math.random() * 30, b: 248 };
        } else if (colorChoice < 0.85) {
          // Violet
          this.color = { r: 139 + Math.random() * 30, g: 92, b: 246 };
        } else {
          // Light violet/pink
          this.color = { r: 167, g: 139, b: 250 };
        }
        
        // Opacity based on depth
        this.opacity = this.depth < 0.3 
          ? 0.15 + Math.random() * 0.15  // Far - more transparent
          : this.depth < 0.6 
            ? 0.3 + Math.random() * 0.3
            : 0.5 + Math.random() * 0.4;  // Close - more opaque
        
        // Subtle animation
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
        this.wobblePhase = Math.random() * Math.PI * 2;
        this.wobbleAmount = (1 - this.depth) * 2;
      }

      update() {
        this.y += this.speed;
        this.pulsePhase += this.pulseSpeed;
        this.wobblePhase += 0.02;
        
        // Subtle size pulsing
        this.size = this.baseSize * (0.9 + Math.sin(this.pulsePhase) * 0.1);
        
        // Subtle horizontal wobble for far particles
        this.x += Math.sin(this.wobblePhase) * this.wobbleAmount * 0.1;
        
        // Reset when off screen
        if (this.y > canvas.height + 100) {
          this.reset();
        }
      }

      draw(ctx) {
        // Bokeh circle with soft edges
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        
        // Core glow
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
        gradient.addColorStop(0.1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.9})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.4})`);
        gradient.addColorStop(0.8, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.1})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add bright center for close particles
        if (this.depth > 0.5) {
          const centerGlow = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 0.3
          );
          centerGlow.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
          centerGlow.addColorStop(1, `rgba(255, 255, 255, 0)`);
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = centerGlow;
          ctx.fill();
        }
      }
    }

    // Small pixel class (tiny squares)
    class Pixel {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10 - Math.random() * 100;
        
        // Small pixel sizes (1-4 px)
        this.size = 1 + Math.random() * 3;
        
        // Speed - small pixels fall slowly
        this.speed = 0.1 + Math.random() * 0.4;
        
        // Color - mostly blue/cyan with some violet
        const colorChoice = Math.random();
        if (colorChoice < 0.5) {
          this.color = { r: 80, g: 160, b: 255 }; // Blue
        } else if (colorChoice < 0.75) {
          this.color = { r: 100, g: 200, b: 255 }; // Cyan
        } else {
          this.color = { r: 150, g: 100, b: 255 }; // Violet
        }
        
        // Opacity - quite dim
        this.opacity = 0.3 + Math.random() * 0.5;
        
        // Twinkle effect
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.02 + Math.random() * 0.04;
      }

      update() {
        this.y += this.speed;
        this.twinklePhase += this.twinkleSpeed;
        
        if (this.y > canvas.height + 20) {
          this.reset();
        }
      }

      draw(ctx) {
        const twinkle = 0.5 + Math.sin(this.twinklePhase) * 0.5;
        const alpha = this.opacity * twinkle;
        
        // Draw small square pixel
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
        ctx.fillRect(
          Math.floor(this.x), 
          Math.floor(this.y), 
          this.size, 
          this.size
        );
        
        // Tiny glow around pixel
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.5})`;
        ctx.shadowBlur = 3;
        ctx.fillRect(
          Math.floor(this.x), 
          Math.floor(this.y), 
          this.size, 
          this.size
        );
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    let pixels = [];
    
    const initParticles = () => {
      particles = [];
      pixels = [];
      
      // Bokeh particles (fewer, larger)
      const bokehCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < Math.min(bokehCount, 200); i++) {
        particles.push(new BokehParticle());
      }
      
      // Small pixels (more, scattered)
      const pixelCount = Math.floor((canvas.width * canvas.height) / 2000);
      for (let i = 0; i < Math.min(pixelCount, 500); i++) {
        pixels.push(new Pixel());
      }
      
      // Sort bokeh by depth for proper layering (far first)
      particles.sort((a, b) => a.depth - b.depth);
    };

    // Draw subtle floor with horizontal scan lines
    const drawFloor = () => {
      const floorY = canvas.height * 0.75;
      
      // Subtle floor gradient
      const floorGradient = ctx.createLinearGradient(0, floorY, 0, canvas.height);
      floorGradient.addColorStop(0, 'rgba(30, 60, 100, 0)');
      floorGradient.addColorStop(0.5, 'rgba(30, 60, 100, 0.05)');
      floorGradient.addColorStop(1, 'rgba(30, 60, 100, 0.1)');
      
      ctx.fillStyle = floorGradient;
      ctx.fillRect(0, floorY, canvas.width, canvas.height - floorY);
      
      // Very subtle horizontal scan lines at the bottom only
      for (let i = 0; i < 40; i++) {
        const progress = i / 40;
        const y = floorY + (canvas.height - floorY) * progress;
        const opacity = 0.02 + progress * 0.04;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(60, 100, 150, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      // Dark navy gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#030812');
      bgGradient.addColorStop(0.4, '#051020');
      bgGradient.addColorStop(0.7, '#071428');
      bgGradient.addColorStop(1, '#0a1a30');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw floor with subtle horizontal lines
      drawFloor();
      
      // Update and draw small pixels first (background layer)
      pixels.forEach(pixel => {
        pixel.update();
        pixel.draw(ctx);
      });
      
      // Update and draw bokeh particles (foreground layer)
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Vignette overlay
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.2,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.9
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(0.5, 'rgba(0, 0, 0, 0.1)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

export default AnimatedBackground;
