import { Users, Heart, Sparkles, Target, Shirt, ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "@/components/SEO";

const AboutUs = () => {
  return (
    <>
    <SEO 
    title="Society Threads - About Us"
    description="Learn about Society Threads, a student-led brand dedicated to creating premium custom apparel for university societies. Quality, affordability, and community-driven designs by students, for students."
    imageUrl="/hero/hero1.jpg"
    url="https://societythreads.co.uk/about-us"
    keywords={[
        "about society threads",
        "student-run brand",
        "student clothing business",
        "university society brand",
        "student entrepreneurs",
        "custom apparel students",
        "society clothing company",
        "student-led initiative",
        "university apparel brand",
        "student business uk"
    ]}  
    />
      <Navigation />
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back to Home Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Creating quality apparel for student communities
            </p>
          </div>

          {/* Main Story Section */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Society Threads is a clothing brand passionate about delivering exceptional custom apparel to university societies, college groups, and student organizations across the UK. Being students ourselves, we truly get what it means to be part of a community and wear your society's colors with honor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're on a mission to deliver stylish, top-tier, and budget-friendly clothing that unites your society—perfect for special events, everyday campus life, or official team gear. Our simple ordering system, flexible design options, and dedication to excellence guarantee your society's clothing makes a statement.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Community is at the heart of everything we do. Each piece we design aims to unite your members and honor what makes your society special.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality & Style</h3>
              <p className="text-muted-foreground leading-relaxed">
                Top-notch fabrics paired with eye-catching designs. Every garment we produce is crafted to be something you'll wear with confidence, whether at university or beyond.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Crafted for the True Student Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Created with passion, we truly know the student experience. We're dedicated to supporting societies with clothing that authentically reflects your identity and spirit.
              </p>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              {/* <Shirt className="w-8 h-8 text-accent" /> */}
              <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Custom Designs</h4>
                  <p className="text-muted-foreground">
                    Personalized clothing that captures your society's character and mission perfectly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Premium Quality</h4>
                  <p className="text-muted-foreground">
                    Superior fabrics and professional printing designed to withstand your most active society moments
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Affordable Pricing</h4>
                  <p className="text-muted-foreground">
                    Competitive rates designed for student budgets while maintaining exceptional quality and design
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Seamless Process</h4>
                  <p className="text-muted-foreground">
                    Straightforward ordering with flexible customization options from initial concept to final product
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              {/* <Target className="w-8 h-8 text-accent" /> */}
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              To equip student societies with clothing that shares their narrative. We strive to simplify the process of creating memorable custom apparel that strengthens community bonds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each society has its own distinctive journey, and your clothing should showcase that. From organizing memorable events to fostering team unity, or just looking sharp together, we're committed to turning your vision into reality.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-accent text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Design Something Special for Your Society?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Excited to transform your society's ideas into wearable art? Contact us now and let's craft clothing that your team will be thrilled to showcase.
            </p>
            <Link
              to="/"
              state={{ scrollTo: 'contact' }}
              className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              <Mail className="w-6 h-6" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Supporting Students Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
              <Heart className="w-5 h-5 text-accent" />
              <span className="font-medium text-accent">
                Supporting Student Creativity & Community
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;