import React, { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "Birmingham HK & Midmen Basketball",
      role: "Basketball Team Jerseys & Kits",
      content: "Professional-grade team jerseys with custom designs. Breathable material, vibrant colors, and durable printing that stands up to intense games and multiple washes.",
      rating: 5,
      images: [
        "/BHKM/Birmingham HK Midmen Basketball League.jpeg",
        "/BHKM/Birmingham HK Midmen Basketball League 1.jpeg"
      ]
    },
    {
      name: "RB Events",
      role: "Event Merchandise & Custom Apparel",
      content: "Complete event merchandise solutions with creative designs and reliable delivery. From hoodies to custom prints, we've handled multiple successful events with outstanding results.",
      rating: 5,
      images: [
        "/RB/RB Events.jpeg",
        "/RB/RB Events 1.jpeg",
        "/RB/RB Events 2.jpeg",
        "/RB/RB Events 3.jpeg",
        "/RB/RB Events 4.jpeg"
      ]
    },
    {
      name: "Warwick Pakistan Society",
      role: "Cultural Society Hoodies & Custom Embroidery",
      content: "Exceptional quality hoodies with intricate embroidery for their annual cultural show. Perfect execution of traditional designs with tight deadline delivery.",
      rating: 5,
      images: [
        "/WPS/Warwick Pakistan Society.jpeg",
        "/WPS/Warwick Pakistan Society 1.jpeg",
        "/WPS/Warwick Pakistan Society 2.jpeg"
      ]
    },
    {
      name: "Southampton Telugu Society",
      role: "Society Custom Hoodies",
      content: "Stunning custom hoodies incorporating traditional Telugu designs. Members proudly wear them around campus, showcasing their cultural heritage with style.",
      rating: 5,
      images: [
        "/Southampton Telugu Society.jpeg"
      ]
    },
    {
      name: "Elevate Studio",
      role: "Premium Custom Apparel",
      content: "High-quality custom designs that elevate their brand. Professional printing and premium materials that their clients love.",
      rating: 5,
      images: [
        "/Elevate Studio.jpeg"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center py-20 overflow-hidden"
      style={{ backgroundColor: '#fef9ea' }}
    >
      <div className="flex flex-col justify-center items-center gap-12 w-full max-w-[1440px] px-6">
        {/* Section Header */}
        <div className="text-center max-w-full">
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{
              color: '#67595e'
            }}
          >
            Real Stories from Real People
          </h2>
          <p 
            style={{
              fontSize: '17px',
              color: '#67595e',
              opacity: 0.7
            }}
          >
            Trusted by 50+ Student Groups, Event Teams & Brands
          </p>
        </div>

        {/* Testimonial Card with Images */}
        <div 
          className="relative w-full max-w-[1100px] flex items-center justify-center touch-pan-y"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="w-full"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? 'translateX(30px)' : 'translateX(0)',
              transition: 'all 0.4s ease-in-out'
            }}
          >
            <div 
              className="rounded-3xl p-8 mx-auto overflow-hidden"
              style={{ backgroundColor: '#67595e' }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Images Side */}
                <div className="relative rounded-2xl overflow-hidden" style={{ height: '400px', minHeight: '400px' }}>
                  {testimonials[currentIndex].images.length === 1 ? (
                    <img 
                      src={testimonials[currentIndex].images[0]}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  ) : testimonials[currentIndex].name === "Birmingham HK & Midmen Basketball" ? (
                    <div className="grid grid-cols-3 gap-2 h-full">
                      <div className="col-span-2 overflow-hidden rounded-lg">
                        <img 
                          src={testimonials[currentIndex].images[0]}
                          alt={`${testimonials[currentIndex].name} 1`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="col-span-1 overflow-hidden rounded-lg">
                        <img 
                          src={testimonials[currentIndex].images[1]}
                          alt={`${testimonials[currentIndex].name} 2`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : testimonials[currentIndex].name === "Warwick Pakistan Society" ? (
                    <div className="flex flex-col gap-2 h-full">
                      <div className="flex-1 overflow-hidden rounded-lg">
                        <img 
                          src={testimonials[currentIndex].images[2]}
                          alt={`${testimonials[currentIndex].name} 3`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2" style={{ height: '35%' }}>
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src={testimonials[currentIndex].images[0]}
                            alt={`${testimonials[currentIndex].name} 1`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <img 
                            src={testimonials[currentIndex].images[1]}
                            alt={`${testimonials[currentIndex].name} 2`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2 h-full">
                      {testimonials[currentIndex].images.slice(0, 4).map((img, idx) => (
                        <div 
                          key={idx}
                          className="relative overflow-hidden rounded-lg"
                        >
                          <img 
                            src={img}
                            alt={`${testimonials[currentIndex].name} ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center" style={{ minHeight: '400px' }}>
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote 
                      size={40} 
                      style={{ 
                        color: '#fef9ea',
                        opacity: 0.2
                      }}
                    />
                  </div>

                  {/* Testimonial Content */}
                  <p 
                    className="mb-6 font-light"
                    style={{
                      fontSize: '18px',
                      lineHeight: '1.6',
                      color: '#fef9ea'
                    }}
                  >
                    {testimonials[currentIndex].content}
                  </p>

                  {/* Author Info */}
                  <div className="mb-4">
                    <h4 
                      className="font-semibold mb-1"
                      style={{
                        fontSize: '20px',
                        color: '#fef9ea'
                      }}
                    >
                      {testimonials[currentIndex].name}
                    </h4>
                    <p 
                      className="mb-3"
                      style={{
                        fontSize: '14px',
                        color: '#fef9ea',
                        opacity: 0.6
                      }}
                    >
                      {testimonials[currentIndex].role}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill="#fef9ea" 
                          style={{ color: '#fef9ea' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center gap-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="p-2 rounded-full transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: 'rgba(173, 159, 164, 0.9)',
              border: '1px solid rgba(103, 89, 94, 0.9)'
            }}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 14 L8 10 L12 6" stroke="#67595e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-300"
                style={{
                  width: currentIndex === index ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: currentIndex === index ? '#67595e' : 'rgba(173, 159, 164, 0.9)',
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="p-2 rounded-full transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: 'rgba(173, 159, 164, 0.9)',
              border: '1px solid rgba(103, 89, 94, 0.9)'
            }}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 14 L12 10 L8 6" stroke="#67595e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Client Logos */}
        <div className="mt-8 pt-8 border-t border-opacity-20 w-full max-w-[1100px]" style={{ borderColor: '#67595e' }}>
          <p 
            className="text-center mb-6 text-sm tracking-wide"
            style={{ color: '#67595e', opacity: 0.7 }}
          >
            TRUSTED BY
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["RB Events", "Warwick Pakistan Society", "Birmingham HK Midmen Basketball", "Southampton Telugu Society", "Elevate Studio", "Southampton Dermatology Society", "Cardiff University Heels Dance Society", "Imperial College ABACUS", "The Slavic Society", "KCL Woman & Politics Society", "Manchester Liberators Volleyball Club", "NGOMA Events", "Taylor Swift Society Bournemouth", "PowHerful Sisterhood Cardiff", "Birmingham English Department Society", "Aston Tamil Society", "Loughborough Tamil Society"].map((client, index) => (
              <span 
                key={index}
                className="text-sm tracking-wide font-medium"
                style={{ color: '#67595e' }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;