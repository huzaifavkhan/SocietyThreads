import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import CustomOrderModal from "@/components/CustomOrderModal";

const features = [
  {
    number: "01",
    title: "Fill Out your Design pre-requisites",
    description: "Share your vision with us by filling out a simple form with your design requirements, preferred garment types, quantities, and any specific details you have in mind.",
    image: "/hero/1.jpg",
  },
  {
    number: "02",
    title: "Review & Approve your mockups",
    description: "Our design team creates professional mockups of your custom clothing. Review the designs, request any adjustments, and approve the final version before production begins.",
    image: "/hero/2.jpeg",
  },
  {
    number: "03",
    title: "Place An Order!",
    description: "Once you're happy with the mockups, simply place your order. We'll handle the rest - from printing to packaging to delivery, ensuring your custom clothing arrives perfect every time.",
    image: "/hero/3.jpeg",
  },
];

const Technology = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleStep, setVisibleStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stepRefs = useRef([]);
  const desktopTimerRef = useRef(null);
  const mobileTimerRef = useRef(null);
  const currentStepRef = useRef(currentStep);

  // Keep ref in sync
  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop: progress loop
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

    const duration = 4000;
    const interval = 50;
    const increment = (interval / duration) * 100;

    desktopTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          setProgress(0);
          setCurrentStep((c) => {
            const nextStep = c < features.length - 1 ? c + 1 : 0;
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

  // Mobile: progress per visibleStep
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

    const duration = 4000;
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

  // Scroll detection for mobile
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
    <>
      <section id="technology" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  3 step process to get the custom clothing you need
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From concept to creation, our streamlined process makes it easy to bring your custom clothing vision to life with professional results.
                </p>

                <Button
                  size="lg"
                  className="group rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 h-12 transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Designing
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-12 md:space-y-4">
                {features.map((feature, index) => {
                  const active = isMobile ? index === visibleStep : index === currentStep;
                  return (
                    <div
                      key={feature.number}
                      ref={(el) => (stepRefs.current[index] = el)}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-base md:text-lg transition-all duration-500 ${
                            active
                              ? "bg-primary text-primary-foreground scale-110 shadow-md"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {feature.number}
                        </div>
                        <h3
                          className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                            active ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {feature.title}
                        </h3>
                      </div>


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

                      {/* Mobile Image */}
                      <div className="lg:hidden">
                        <div className="relative min-h-[446px] md:min-h-[724px] w-full overflow-hidden rounded-2xl shadow-2xl bg-muted">
                          <img
                            key={feature.number}
                            src={feature.image}
                            alt={feature.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          
                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                            {features.map((feat, idx) => (
                              <div
                                key={feat.number}
                                className={`absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 transition-opacity duration-700 ${
                                  idx === index ? 'opacity-100' : 'opacity-0'
                                }`}
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="flex-shrink-0 w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center font-bold text-sm">
                                    {feat.number}
                                  </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 uppercase tracking-wide">
                                  {feat.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                  {feat.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image - Desktop */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>
              <div className="relative min-h-[446px] lg:min-h-[724px] w-full overflow-hidden rounded-2xl shadow-2xl bg-muted">
                <img
                  key={currentStep}
                  src={features[currentStep].image}
                  alt={features[currentStep].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Image Overlay with Current Step Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 text-white">
                  {features.map((feature, index) => (
                    <div
                      key={feature.number}
                      className={`absolute bottom-8 lg:bottom-10 left-8 lg:left-10 right-8 lg:right-10 transition-opacity duration-700 ${
                        index === currentStep ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-11 h-11 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg">
                          {feature.number}
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 uppercase tracking-wide">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-xl">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Modal */}
      <CustomOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Technology;