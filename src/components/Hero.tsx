import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import CustomOrderModal from "@/components/CustomOrderModal";

const Hero = () => {
  // Array of images for the slideshow
  const images = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const imageContainerRef = useRef(null);

  // Prevent body scroll when Calendly modal is open
  useEffect(() => {
    if (isCalendlyOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const htmlElement = document.documentElement;
      
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // Also prevent on html element
      htmlElement.style.overflow = "hidden";
      
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-position', scrollY.toString());
    } else {
      // Re-enable scrolling and restore position
      const htmlElement = document.documentElement;
      const scrollY = document.body.getAttribute('data-scroll-position');
      
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      htmlElement.style.overflow = "";
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute('data-scroll-position');
      }
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      const htmlElement = document.documentElement;
      const scrollY = document.body.getAttribute('data-scroll-position');
      
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      htmlElement.style.overflow = "";
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        document.body.removeAttribute('data-scroll-position');
      }
    };
  }, [isCalendlyOpen]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - go to next image
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else if (isRightSwipe) {
      // Swipe right - go to previous image
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    // Change image every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section id="hero" className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-center lg:text-left">
                Premium Custom Apparel – Made Simple
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-center lg:text-left">
                Design stylish, sustainable and high quality apparel that makes your team stand out.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="sm" 
                  className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 text-base px-6 h-12 group w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Design Your Apparel
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="rounded-2xl text-base px-6 h-12 w-full sm:w-auto"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Book a Call
                </Button>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-2 md:pt-4 mb-4 lg:mb-0 max-w-md mx-auto lg:mx-0 lg:max-w-none">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">
                    <span className="font-bold">No</span> Upfront Costs
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">
                    <span className="font-bold">No</span> Minimum Orders
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">
                    <span className="font-bold">500+</span> Custom Designs Created
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">
                    <span className="font-bold">UK</span> Based Fulfilment
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Slideshow */}
            <div className="relative mt-2 lg:mt-0 mb-12 lg:mb-0">
              <div 
                ref={imageContainerRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-blue-500/10 w-full max-w-[600px] aspect-square mx-auto border-2 border-[#67595e] cursor-grab active:cursor-grabbing touch-pan-y"
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Custom apparel design ${index + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex 
                        ? 'opacity-100' 
                        : 'opacity-0 absolute top-0 left-0'
                    }`}
                  />
                ))}
                
                {/* Slideshow Indicators */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Modal */}
      <CustomOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setIsCalendlyOpen(false)}
        >
          <div 
            className="bg-background rounded-3xl w-full max-w-4xl h-[85vh] relative shadow-2xl border-2 border-[#67595e] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCalendlyOpen(false)}
              className="absolute top-6 right-6 z-10 bg-background/95 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-muted transition-all border border-border"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <iframe
              src="https://calendly.com/societythreads-info/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-3xl "
              title="Schedule a call"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;