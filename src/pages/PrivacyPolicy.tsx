import { Shield, Eye, Lock, UserCheck, Globe, Mail, ArrowLeft, FileText, Cookie, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
    <SEO 
      title="Society Threads - Privacy Policy"
      description="Society Threads' privacy policy outlines how we collect, use, and protect your personal information when you visit our site or inquire about custom apparel for your university society."
      imageUrl="/hero/hero1.jpg"
      url="https://societythreads.co.uk/privacy-policy"
      keywords={[
        "society threads privacy",
        "data protection policy",
        "student data privacy",
        "custom apparel privacy",
        "university society data policy"
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
              Privacy Policy
            </h1>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-sm space-y-8">
            
            {/* Introduction */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                This Privacy Policy describes how Society Threads (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit our website, use our services, or otherwise communicate with us regarding the Site (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a website visitor or another individual whose information we have collected pursuant to this Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please read this Privacy Policy carefully.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <FileText className="w-6 h-6 text-accent" /> */}
                Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* How We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Eye className="w-6 h-6 text-accent" /> */}
                How We Collect and Use Your Personal Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide or improve or improve the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* What We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Shield className="w-6 h-6 text-accent" /> */}
                What Personal Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.
              </p>

              {/* Information We Collect Directly */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Information We Collect Directly from You</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Information that you directly submit to us through our Services may include:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span>Contact details including your name, address, phone number, and email.</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span>Account information including your username, password, security questions and other information used for account security purposes (if applicable).</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span>Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span>Inquiry information when you contact us about our products or services.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.
                </p>
              </div>

              {/* Usage Data */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Information We Collect about Your Usage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may also automatically collect certain information about your interaction with the Services ("Usage Data"). To do this, we may use cookies, pixels and similar technologies ("Cookies"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.
                </p>
              </div>

              {/* Third Party Info */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Information We Obtain from Third Parties</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="text-muted-foreground flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span>Companies who support our Site and Services, such as website hosting providers and analytics services.</span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                    <span>When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Any information we obtain from third parties will be treated in accordance with this Privacy Policy. Also see the section below, Third Party Websites and Links.
                </p>
              </div>
            </div>

            <div className="border-t border-border"></div>

            {/* How We Use */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <UserCheck className="w-6 h-6 text-accent" /> */}
                How We Use Your Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Providing Services and Information</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We use your personal information to provide you with the Services, including to send you information about our products and services, to respond to your inquiries, to create and manage your account (if applicable), and to provide customer support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Marketing and Advertising</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We may use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Security and Fraud Prevention</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Communicating with You and Service Improvement</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border"></div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Cookie className="w-6 h-6 text-accent" /> */}
                Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Like many websites, we use Cookies on our Site. We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services. We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our website also recognizes the Global Privacy Control (GPC) signal, which enables you to opt-out of certain uses or disclosures of your information. To learn more about Global Privacy Control, you can visit https://globalprivacycontrol.org/.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* How We Disclose */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <AlertCircle className="w-6 h-6 text-accent" /> */}
                How We Disclose Personal Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In certain circumstances, we may disclose your personal information to third parties for legitimate purposes and other reasons subject to this Privacy Policy. Such circumstances may include:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="text-muted-foreground flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                  <span>With vendors or other third parties who perform services on our behalf (e.g., IT management, data analytics, customer support, cloud storage, email service providers).</span>
                </li>
                <li className="text-muted-foreground flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                  <span>With business and marketing partners to provide services and advertise to you.</span>
                </li>
                <li className="text-muted-foreground flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                  <span>When you direct, request us or otherwise consent to our disclosure of certain information to third parties.</span>
                </li>
                <li className="text-muted-foreground flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                  <span>With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.</span>
                </li>
                <li className="text-muted-foreground flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                  <span>In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-border"></div>

            {/* Third Party Websites */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Globe className="w-6 h-6 text-accent" /> */}
                Third Party Websites and Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* Children's Data */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Shield className="w-6 h-6 text-accent" /> */}
                Children's Data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Lock className="w-6 h-6 text-accent" /> */}
                Security and Retention of Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee "perfect security." In addition, any information you send to us may not be secure while in transit. We recommend that you do not use insecure channels to communicate sensitive or confidential information to us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <UserCheck className="w-6 h-6 text-accent" /> */}
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.
              </p>
              <ul className="space-y-3">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Right to Access / Know:</strong> You may have a right to request access to personal information that we hold about you.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Right to Delete:</strong> You may have a right to request that we delete personal information we maintain about you.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Right to Correct:</strong> You may have a right to request that we correct inaccurate personal information we maintain about you.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Right of Portability:</strong> You may have a right to receive a copy of the personal information we hold about you.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Restriction of Processing:</strong> You may have the right to ask us to stop or restrict our processing of personal information.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Withdrawal of Consent:</strong> Where we rely on consent to process your personal information, you may have the right to withdraw this consent.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Managing Communication Preferences:</strong> We may send you promotional emails, and you may opt out of receiving these at any time.
                </li>
              </ul>
            </div>

            <div className="border-t border-border"></div>

            {/* International Users */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Globe className="w-6 h-6 text-accent" /> */}
                International Users
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Please note that we may transfer, store and process your personal information outside the country you live in. Your personal information is also processed by staff and third party service providers and partners in these countries.
              </p>
            </div>

            <div className="border-t border-border"></div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {/* <Mail className="w-6 h-6 text-accent" /> */}
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please email us at societythreads.info@gmail.com
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                For the purpose of applicable data protection laws and if not explicitly stated otherwise, we are the data controller of your personal information.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated: November 02, 2025
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;