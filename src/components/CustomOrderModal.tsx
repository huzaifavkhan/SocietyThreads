import { X } from "lucide-react";
import { useEffect } from "react";
import CustomOrderForm from "@/components/CustomOrderForm";

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomOrderModal = ({ isOpen, onClose }: CustomOrderModalProps) => {
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-hidden">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 hover:bg-white/20 rounded-full transition-colors text-primary-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Form Component */}
        <CustomOrderForm onClose={onClose} />
      </div>
    </div>
  );
};

export default CustomOrderModal;