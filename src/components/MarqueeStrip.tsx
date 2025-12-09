import { Shirt, ShoppingBag } from "lucide-react";
import { PiBaseballCapBold, PiHoodieBold, PiToteBold, PiPantsBold, PiTShirtBold } from "react-icons/pi";

const MarqueeStrip = () => {
  const messages = [
    { text: "CUSTOM TOTE BAGS", icon: PiToteBold },
    { text: "CUSTOM PANTS", icon: PiPantsBold },
    { text: "CUSTOM CAPS", icon: PiBaseballCapBold },
    { text: "CUSTOM T-SHIRTS", icon: PiTShirtBold },
    { text: "CUSTOM HOODIES", icon: PiHoodieBold }
  ];

  return (
    <div className="relative h-[45px] w-full overflow-hidden bg-[#67595e] border-t border-b border-black">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      
      <div className="marquee-strip h-full flex items-center">
        <div className="animate-scroll flex items-center whitespace-nowrap">
          {/* First set of messages */}
          {messages.map((message, index) => {
            const Icon = message.icon;
            return (
              <div key={`first-${index}`} className="flex items-center">
                <Icon className="h-5 w-5 text-white flex-shrink-0 mx-2" />
                <span className="text-white font-bold text-md tracking-tight px-2" style={{ fontFamily: 'font-NewGroteskMono, monospace' }}>
                  {message.text}
                </span>
                <span className="text-white mx-4">•</span>
              </div>
            );
          })}
          
          {/* Second set for seamless loop */}
          {messages.map((message, index) => {
            const Icon = message.icon;
            return (
              <div key={`second-${index}`} className="flex items-center">
                <Icon className="h-5 w-5 text-white flex-shrink-0 mx-2" />
                <span className="text-white font-bold text-md tracking-tight px-2" style={{ fontFamily: 'font-NewGroteskMono, monospace' }}>
                  {message.text}
                </span>
                <span className="text-white mx-4">•</span>
              </div>
            );
          })}
          
          {/* Third set for extra-wide screens */}
          {messages.map((message, index) => {
            const Icon = message.icon;
            return (
              <div key={`third-${index}`} className="flex items-center">
                <Icon className="h-5 w-5 text-white flex-shrink-0 mx-2" />
                <span className="text-white font-bold text-md tracking-tight px-2" style={{ fontFamily: 'font-NewGroteskMono, monospace' }}>
                  {message.text}
                </span>
                <span className="text-white mx-4">•</span>
              </div>
            );
          })}
          
          {/* Fourth set for ultra-wide screens */}
          {messages.map((message, index) => {
            const Icon = message.icon;
            return (
              <div key={`fourth-${index}`} className="flex items-center">
                <Icon className="h-5 w-5 text-white flex-shrink-0 mx-2" />
                <span className="text-white font-bold text-md tracking-tight px-2" style={{ fontFamily: 'font-NewGroteskMono, monospace' }}>
                  {message.text}
                </span>
                <span className="text-white mx-4">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;