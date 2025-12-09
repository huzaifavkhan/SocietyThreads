import { Package, AlertCircle, Mail, Clock, XCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "@/components/SEO";

const RefundPolicy = () => {
  return (
    <>
      <Navigation />
      <SEO 
        title="Society Threads - Return & Refund Policy"
        description="View Society Threads' refund and return policy for custom apparel. Learn about our 7-day guarantee for defective or incorrect items for university society orders."
        imageUrl="/hero/hero1.jpg"
        url="https://societythreads.co.uk/refund-policy"
        keywords={[
          "society threads refund",
          "custom apparel returns",
          "society clothing refund policy",
          "university merchandise returns",
          "student apparel exchanges",
          "defective clothing policy"
        ]}  
      />
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
              Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your satisfaction is our priority. Please read our refund and return policy carefully.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-sm space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Package className="w-6 h-6 text-accent" /> */}
                Refunds and Returns
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Due to the customized nature of our products, we do not offer refunds or exchanges unless the item is:
              </p>
              <div className="space-y-3 ml-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Defective</strong> - Manufacturing defects or quality issues
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Incorrect</strong> - Wrong item or design sent
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Damaged during shipping</strong> - Item arrived damaged
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">7-Day Window</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you believe you have received a faulty product, please contact us{" "}
                    <strong className="text-foreground">within 7 days</strong> of receiving your order. 
                    Include your order number, a brief description of the issue, and clear photos of the product.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500" />
                Non-Refundable Items
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following items are not eligible for refunds or returns:
              </p>
              <div className="space-y-3 ml-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                  <span className="text-muted-foreground">Customized or personalized items</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                  <span className="text-muted-foreground">Final sale or clearance items</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2"></div>
                  <span className="text-muted-foreground">Items returned without prior approval</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <AlertCircle className="w-6 h-6 text-accent" /> */}
                Refund Process
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold mb-1">Contact Our Team</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Email our team at{" "}
                      <a 
                        href="mailto:societythreads.info@gmail.com" 
                        className="text-accent hover:underline font-medium"
                      >
                        societythreads.info@gmail.com
                      </a>{" "}
                      within 7 days of receiving your order.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold mb-1">Provide Details</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Include your order number, a brief description of the issue, and clear photos of the product.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold mb-1">Resolution</h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      Once approved, we will either:
                    </p>
                    <div className="space-y-2 ml-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">Replace the item free of charge</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">Offer a refund (only in approved cases)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mt-8">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="font-semibold text-lg">Need Help?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                If you have any questions about our refund policy or need assistance with a return, drop us an email at societythreads.info@gmail.com
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

export default RefundPolicy;