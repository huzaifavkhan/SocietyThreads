import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (!isHomePage) {
      // If not on home page, navigate to home with state
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // If already on home page, scroll to section immediately
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 5;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    
    if (!isHomePage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle scrolling after navigation with state
  useEffect(() => {
    if (isHomePage && location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      
      // Use a longer timeout to ensure page is fully loaded
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 5;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
        
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isHomePage, location.state]);

  return (
    <>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16"></div>
      
      <header className={`w-full border-b fixed top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-background md:bg-background/55 md:backdrop-blur-md shadow-md" 
          : "bg-background"
      }`}>
      <nav className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a onClick={() => scrollToTop()} className="flex items-center gap-2 group cursor-pointer">
            <img 
              src={"/Logo.png"} 
              alt="Society Threads Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Desktop Navigation - Moved to the right */}
        <div className="hidden lg:flex items-center space-x-1 ml-auto">
          <button onClick={() => scrollToSection('technology')} className="px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded-md hover:bg-accent">
            Production
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded-md hover:bg-accent">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('faq')} className="px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded-md hover:bg-accent">
            FAQs
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded-md hover:bg-accent">
            Contact Us
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Menu 
                className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
                  mobileMenuOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
                }`} 
              />
              <X 
                className={`h-5 w-5 absolute transition-all duration-500 ease-in-out ${
                  mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
                }`} 
              />
            </div>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden border-t bg-background overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-1">
          <button onClick={() => scrollToSection('technology')} className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-white hover:bg-accent rounded-md transition-colors">
            Production
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-white hover:bg-accent rounded-md transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-white hover:bg-accent rounded-md transition-colors">
            FAQs
          </button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-white hover:bg-accent rounded-md transition-colors">
            Contact Us
          </button>
        </div>
      </div>
      </header>
    </>
  );
};

export default Navigation;