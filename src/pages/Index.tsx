import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MarqueeStrip from "@/components/MarqueeStrip";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import SEO from "@/components/SEO";


const Index = () => {
  return (
    <>
      <SEO 
        title="Society Threads - Home"
        description="Design premium custom apparel for your university society. High-quality hoodies, t-shirts, and merchandise tailored for student organizations. Fast delivery, professional designs, and unbeatable quality."
        imageUrl="/hero/hero1.jpg"
        url="https://societythreads.co.uk"
        keywords={[
          "custom apparel",
          "university societies",
          "student organizations",
          "custom hoodies",
          "custom t-shirts",
          "society merchandise",
          "university clothing",
          "student apparel",
          'custom apparel',
          'university societies',
          'student organizations',
          'custom hoodies',
          'custom t-shirts',
          'society merchandise',
          'university clothing',
          'student apparel',
          'varsity apparel',
          'college society merch',
          'student union clothing',
          'society hoodies',
          'university club apparel',
          'society committee merchandise',
          'freshers week clothing',
          'society branded apparel',
          'custom varsity jackets',
          'society printing services'
        ]}  
      />
      
      <div className="min-h-screen">
        <Intro/>
        <Navigation />
        <Hero />
        <MarqueeStrip />
        <Technology />
        <MarqueeStrip />
        <Testimonials />
        <MarqueeStrip />
        <FAQ />
        <MarqueeStrip />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;