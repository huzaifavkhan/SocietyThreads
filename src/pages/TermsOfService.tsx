import { Scale, ShoppingBag, CreditCard, RefreshCw, Shield, Users, AlertTriangle, FileText, Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <>
      <SEO 
        title="Society Threads - Terms of Service"
        description="Read Society Threads' terms of service for custom apparel orders, products, payments, and policies for university societies and student organizations."
        imageUrl="/hero/hero1.jpg"
        url="https://societythreads.co.uk/terms-of-service"
        keywords={[
          "society threads terms",
          "custom apparel terms",
          "university clothing policies",
          "society merchandise terms",
          "student apparel conditions"
        ]}  
      />
      <Navigation />
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Home Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Scale className="w-6 h-6 text-accent" /> */}
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Society Threads. By engaging with our services, including purchasing apparel, 
                participating in events, or using our website and platforms, you agree to comply with these Terms of Service.
              </p>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <ShoppingBag className="w-6 h-6 text-accent" /> */}
                2. Products & Orders
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">2.1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Society Thread offers customized apparel for various university societies and colleges.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">2.2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Orders must be placed through official channels and are subject to availability.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">2.3.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Once an order is confirmed, cancellations or modifications may not be possible.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">2.4.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    The Society strives for accuracy in product descriptions, but minor variations may occur.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <CreditCard className="w-6 h-6 text-accent" /> */}
                3. Payments & Pricing
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">3.1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    All prices are in GBP and are subject to change without prior notice.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">3.2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Payments must be made in full before processing orders.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">3.3.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    The Society is not responsible for additional bank charges or transaction fees incurred by members.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <RefreshCw className="w-6 h-6 text-accent" /> */}
                4. Refunds & Returns
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">4.1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Due to the customized nature of our products, refunds and returns are only accepted in cases of 
                    defective or incorrect items.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">4.2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Members must notify the Society within 7 days of receiving a defective product to be eligible for an exchange.
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-accent/10 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  For more details, please refer to our{" "}
                  <Link to="/refund-policy" className="text-accent hover:underline font-medium">
                    Refund Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Shield className="w-6 h-6 text-accent" /> */}
                5. Intellectual Property
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">5.1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    All designs, logos, and branding associated with the Society are its intellectual property.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">5.2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Members may not reproduce or use these materials without written permission.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Users className="w-6 h-6 text-accent" /> */}
                6. Code of Conduct
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">6.1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Members must engage respectfully within the Society and its platforms.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">6.2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Any misconduct, including harassment or fraudulent activity, may result in termination of membership.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <AlertTriangle className="w-6 h-6 text-accent" /> */}
                7. Liability & Disclaimers
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">7.1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    The Society is not liable for damages, losses, or delays beyond its control.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">7.2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Participation in Society activities is at the member's own risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <FileText className="w-6 h-6 text-accent" /> */}
                8. Amendments
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">8.1.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    The Society reserves the right to update these Terms of Service at any time.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-accent flex-shrink-0">8.2.</span>
                  <p className="text-muted-foreground leading-relaxed">
                    Continued participation after amendments constitutes acceptance of the new terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Mail className="w-6 h-6 text-accent" /> */}
                9. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For inquiries regarding these Terms of Service, please contact us at societythreads.info@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated: November 2, 2025
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsOfService;