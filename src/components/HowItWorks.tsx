import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Create unique apparel",
    description: "Customize premium blank garments with our easy-to-use design tool.",
    video: "/background-video.mp4",
  },
  {
    number: "02",
    title: "Fill your store",
    description:
      "Add your custom designs in just a few clicks, with no inventory or upfront costs.",
    video: "/background-video.mp4",
  },
  {
    number: "03",
    title: "Dropship to customers",
    description:
      "Society Threads handles production and delivery, sending your creations straight to your customers quickly when they order.",
    video: "/background-video.mp4",
  },
  {
    number: "04",
    title: "Earn profit",
    description:
      "You keep the difference between production costs and your selling price as profit.",
    video: "/background-video.mp4",
  },
];

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleStep, setVisibleStep] = useState(0);

  const stepRefs = useRef([]);
  const desktopTimerRef = useRef(null);
  const mobileTimerRef = useRef(null);
  const currentStepRef = useRef(currentStep);
  const observerRef = useRef(null);
  const resizeDebounceRef = useRef(null);

  // keep ref in sync
  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);

  // detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ---------- Desktop: progress loop ----------
  useEffect(() => {
    if (isMobile) {
      if (desktopTimerRef.current) {
        clearInterval(desktopTimerRef.current);
        desktopTimerRef.current = null;
      }
      return;
    }

    if (desktopTimerRef.current) {
      clearInterval(desktopTimerRef.current);
      desktopTimerRef.current = null;
    }

    setProgress(0);

    const duration = 3000;
    const interval = 50;
    const increment = (interval / duration) * 100;

    desktopTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          setProgress(0);
          setCurrentStep((c) => {
            const nextStep = c < steps.length - 1 ? c + 1 : 0;
            currentStepRef.current = nextStep;
            return nextStep;
          });
          return 0;
        }
        return next;
      });
    }, interval);

    return () => {
      if (desktopTimerRef.current) {
        clearInterval(desktopTimerRef.current);
        desktopTimerRef.current = null;
      }
    };
  }, [isMobile]);

  // Reset progress on step change
  useEffect(() => {
    if (!isMobile) setProgress(0);
  }, [currentStep, isMobile]);

  // ---------- Mobile: progress per visibleStep ----------
  useEffect(() => {
    if (!isMobile) {
      if (mobileTimerRef.current) {
        clearInterval(mobileTimerRef.current);
        mobileTimerRef.current = null;
      }
      return;
    }

    if (mobileTimerRef.current) {
      clearInterval(mobileTimerRef.current);
      mobileTimerRef.current = null;
    }
    setProgress(0);

    const duration = 3000;
    const interval = 16;
    const increment = (interval / duration) * 100;

    mobileTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) return 0;
        return next;
      });
    }, interval);

    return () => {
      if (mobileTimerRef.current) {
        clearInterval(mobileTimerRef.current);
        mobileTimerRef.current = null;
      }
    };
  }, [isMobile, visibleStep]);

  // ---------- Scroll detection for mobile ----------
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.25;
        if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
          if (index !== visibleStep) {
            setVisibleStep(index);
            setProgress(0);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, visibleStep]);

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                You dream it.
                <br />
                We deliver it.
              </h2>

              <Button
                size="lg"
                className="group rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 h-12 transition-all"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfc3i8AnID8OZY5BMxIpIbyaP90Ccg1ZfDUlIdyHxjj__kfFg/viewform?usp=send_form', '_blank')}
              >
                Start Designing
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Steps */}
            <div className="space-y-12 md:space-y-4">
              {steps.map((step, index) => {
                const active = isMobile ? index === visibleStep : index === currentStep;
                return (
                  <div
                    key={step.number}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-9 h-9 md:w-9 md:h-9 rounded-lg flex items-center justify-center font-bold text-base md:text-lg transition-all duration-500 ${
                          active
                            ? "bg-primary text-primary-foreground scale-110 shadow-md"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step.number}
                      </div>
                      <h3
                        className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                          active ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                        active ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="pt-2 pb-4">
                      <div className="w-full h-[1px] bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-75 ease-linear rounded-full"
                          style={{
                            width: active ? `${progress}%` : "0%",
                          }}
                        />
                      </div>
                    </div>

                    {/* Unified Video Size */}
                    <div className="lg:hidden">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[1008/1280] bg-muted">
                        <video
                          key={step.number}
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          controlsList="nodownload nofullscreen noremoteplayback"
                          disablePictureInPicture
                          onError={(e) =>
                            console.error("Video failed to load:", e)
                          }
                        >
                          <source src={step.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Video - Desktop */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[1008/1280] bg-muted">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={(e) => console.error("Video failed to load:", e)}
              >
                <source src="/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
