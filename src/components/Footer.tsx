import { Instagram, Phone, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
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

  return (
    <footer className="bg-[#67595e] text-[#fef9ea]">
      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-3xl font-bold mb-6 leading-tight">
              Created by you,<br />
              crafted by us
            </h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/society._threads/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Instagram className="h-7 w-7" />
              </a>
              <a href="https://www.tiktok.com/@society.threads" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">INFO</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about-us" className="hover:underline">ABOUT US</a></li>
              <li><a href="/privacy-policy" className="hover:underline">PRIVACY POLICY</a></li>
              <li><a href="/terms-of-service" className="hover:underline">TERMS OF SERVICE</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('contact')} className="hover:underline">HELP CENTER</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:underline">FAQ</button></li>
              <li><a href="/refund-policy" className="hover:underline">RETURNS & REFUND</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">CONTACT</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 max-w-full">
                <Mail size={20} className="flex-shrink-0" />
                <a
                  href="mailto:info@societythreads.co.uk"
                  className="hover:underline overflow-hidden text-ellipsis break-words"
                  style={{ overflowWrap: "normal", wordBreak: "normal" }}
                >
                  info@<wbr />societythreads.<wbr />co.<wbr />uk
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <a href="tel:+447516758230" className="hover:underline">+44 7516 758230</a>
              </li>
              <li className="flex items-center gap-2">
                <img src="https://flagcdn.com/w80/gb.png" alt="UK" className="h-6 w-10 object-cover" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="relative overflow-hidden bg-[#67595e] pb-0 -mb-3">
        <div className="text-[11vw] font-black text-[#fef9ea] opacity-30 leading-none tracking-tighter" style={{ clipPath: 'inset(0 0 25% 0)' }}>
          SOCIETY THREADS
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#fef9ea] border-opacity-20 py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#fef9ea] opacity-70">
              © {new Date().getFullYear()}, SOCIETY THREADS. All rights reserved. 
            </p>
            <div className="flex flex-wrap justify-center gap-3 items-center">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg" alt="PayPal" className="h-6 opacity-60 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visa.svg" alt="Visa" className="h-10 opacity-60 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/americanexpress.svg" alt="Amex" className="h-6 opacity-60 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mastercard.svg" alt="Mastercard" className="h-8 opacity-60 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/klarna.svg" alt="Klarna" className="h-5 opacity-60 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlepay.svg" alt="Google Pay" className="h-12 opacity-60 invert" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/applepay.svg" alt="Apple Pay" className="h-11 opacity-60 invert" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;