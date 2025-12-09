import { useRef, useEffect, useState } from "react";

export default function Intro() {
  // Check if intro has already been shown (persists across navigation)
  const [shouldShow, setShouldShow] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if intro was shown in this browser session
      const hasShown = window.sessionStorage?.getItem('introShown');
      return !hasShown;
    }
    return true;
  });

  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const autoCompleteTimerRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayRef = useRef<NodeJS.Timeout | null>(null);

  // Wait 2 seconds, then auto-complete animation over 2 seconds
  useEffect(() => {
    if (!shouldShow) return;

    // Wait 2 seconds before starting
    initialDelayRef.current = setTimeout(() => {
      // Only start auto-animation if user hasn't interacted
      if (!userInteracted) {
        const duration = 2000; // 2 seconds for animation
        const startTime = Date.now();
        
        const animateProgress = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Smooth easing function (ease-in-out)
          const easedProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          
          setProgress(easedProgress);
          
          if (progress < 1) {
            autoCompleteTimerRef.current = requestAnimationFrame(animateProgress) as unknown as NodeJS.Timeout;
          } else {
            setIsComplete(true);
            setTimeout(() => {
              setScrollLocked(false);
            }, 800);
          }
        };
        
        autoCompleteTimerRef.current = requestAnimationFrame(animateProgress) as unknown as NodeJS.Timeout;
      }
    }, 2000);

    return () => {
      if (initialDelayRef.current) {
        clearTimeout(initialDelayRef.current);
      }
      if (autoCompleteTimerRef.current) {
        cancelAnimationFrame(autoCompleteTimerRef.current as unknown as number);
      }
    };
  }, [shouldShow, userInteracted]);

  // Mark intro as shown when complete (persists across page navigation)
  useEffect(() => {
    if (isComplete && shouldShow) {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem('introShown', 'true');
      }
    }
  }, [isComplete, shouldShow]);

  // Lock/unlock body scroll and hide/show navbar
  useEffect(() => {
    if (!shouldShow) return;

    const navbar = document.querySelector('header');
    const spacer = navbar?.previousElementSibling;
    
    if (navbar) {
      (navbar as HTMLElement).style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }
    
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      
      if (navbar) {
        (navbar as HTMLElement).style.opacity = '0';
        (navbar as HTMLElement).style.transform = 'translateY(-20px)';
        (navbar as HTMLElement).style.pointerEvents = 'none';
      }
      if (spacer) {
        (spacer as HTMLElement).style.display = 'none';
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      
      if (spacer) {
        (spacer as HTMLElement).style.display = '';
      }
      if (navbar) {
        (navbar as HTMLElement).style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            (navbar as HTMLElement).style.opacity = '1';
            (navbar as HTMLElement).style.transform = 'translateY(0)';
            (navbar as HTMLElement).style.pointerEvents = 'auto';
          });
        });
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      if (navbar) {
        (navbar as HTMLElement).style.opacity = '';
        (navbar as HTMLElement).style.transform = '';
        (navbar as HTMLElement).style.transition = '';
        (navbar as HTMLElement).style.pointerEvents = '';
      }
      if (spacer) {
        (spacer as HTMLElement).style.display = '';
      }
    };
  }, [scrollLocked, shouldShow]);

  // 3D Canvas Animation
  useEffect(() => {
    if (!shouldShow) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create subtle particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Parallax effect based on mouse
        const dx = (mouseX - canvas.width / 2) * 0.01;
        const dy = (mouseY - canvas.height / 2) * 0.01;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const scale = 1000 / (1000 + p.z);
        const x = p.x + dx * (p.z / 100);
        const y = p.y + dy * (p.z / 100);
        const size = p.size * scale;

        ctx.fillStyle = `rgba(103, 89, 94, ${0.15 * scale})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    let animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [shouldShow]);

  // Handle wheel events for animation progress
  useEffect(() => {
    if (!scrollLocked || !shouldShow) return;

    // Clear all timers if user interacts
    const clearTimers = () => {
      setUserInteracted(true);
      if (initialDelayRef.current) {
        clearTimeout(initialDelayRef.current);
        initialDelayRef.current = null;
      }
      if (autoCompleteTimerRef.current) {
        cancelAnimationFrame(autoCompleteTimerRef.current as unknown as number);
        autoCompleteTimerRef.current = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimers();
      
      setProgress((prev) => {
        const delta = e.deltaY > 0 ? 0.025 : -0.025;
        const newProgress = Math.min(Math.max(prev + delta, 0), 1);
        return newProgress;
      });
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      clearTimers();
      const touchEndY = e.touches[0].clientY;
      const delta = touchStartY - touchEndY;
      
      setProgress((prev) => {
        const newProgress = Math.min(Math.max(prev + delta * 0.002, 0), 1);
        return newProgress;
      });
      
      touchStartY = touchEndY;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scrollLocked, shouldShow]);

  // Monitor progress and unlock when complete
  useEffect(() => {
    if (progress >= 0.99 && !isComplete) {
      setIsComplete(true);
      
      setTimeout(() => {
        setScrollLocked(false);
      }, 800);
    }
  }, [progress, isComplete]);

  // Don't render if intro shouldn't show
  if (!shouldShow) return null;

  // Animation logic
  const headingOpacity = progress < 0.2 ? 1 - progress / 0.2 : 0;
  const headingY = progress < 0.2 ? (progress / 0.2) * 30 : 30;

  let logoOpacity = 0;
  if (progress >= 0.3 && progress <= 0.65) {
    if (progress < 0.5) {
      logoOpacity = (progress - 0.3) / 0.2;
    } else {
      logoOpacity = 1;
    }
  } else if (progress > 0.65 && progress < 0.75) {
    logoOpacity = 1;
  } else if (progress >= 0.75) {
    logoOpacity = Math.max(0, 1 - (progress - 0.75) / 0.25);
  }

  let logoScale = 0.85;
  if (progress >= 0.3 && progress <= 0.65) {
    if (progress < 0.5) {
      logoScale = 0.85 + ((progress - 0.3) / 0.2) * 0.15;
    } else {
      logoScale = 1;
    }
  } else if (progress > 0.65) {
    logoScale = 1;
  }

  let bgOpacity = 0;
  if (progress >= 0.7) {
    const fadeProgress = (progress - 0.7) / 0.3;
    bgOpacity = fadeProgress < 0.5 
      ? 2 * fadeProgress * fadeProgress 
      : 1 - Math.pow(-2 * fadeProgress + 2, 2) / 2;
  }

  const containerOpacity = isComplete ? 0 : 1;

  if (!scrollLocked && isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen bg-gradient-to-br from-[#fef9ea] to-[#fcefc7] overflow-hidden z-[100] transition-opacity duration-700 ease-out"
      style={{ 
        opacity: containerOpacity,
        pointerEvents: scrollLocked ? 'auto' : 'none'
      }}
    >
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Heading */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-6 transition-all duration-300 ease-out"
        style={{
          opacity: headingOpacity,
          transform: `translateY(${headingY}%)`,
        }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#67595e] mb-4 leading-tight tracking-tight">
          Wear Your Society.
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-[#67595e]/70 font-light tracking-wide">
          Express Your Unity.
        </p>
      </div>

      {/* Centered logo */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center md:justify-center text-[#67595e] pointer-events-none z-30 transition-all duration-400 ease-out -translate-y-12 md:translate-y-0"
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      >
        <div className="border-[#67595e] rounded-[2rem] border-2 bg-[#fef9ea]/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-[90vw] md:0 -mt-20">
          <img
            src="/Logo.png"
            alt="Society Threads logo"
            className="w-80 md:w-[28rem] lg:w-[32rem] mb-6 mx-auto"
          />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center px-4 max-w-4xl text-[#67595e]">
            Custom Apparel for University Societies
          </h2>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-300"
        style={{ opacity: logoOpacity > 0.8 ? logoOpacity : 0 }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#67595e] text-sm font-semibold uppercase tracking-wider">
            Scroll to explore
          </p>
          <svg
            className="w-6 h-6 text-[#67595e] animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Fade-out overlay */}
      <div
        className="absolute inset-0 bg-[#fef9ea] pointer-events-none z-50 transition-opacity duration-500 ease-in-out"
        style={{ opacity: bgOpacity }}
      />
    </div>
  );
}