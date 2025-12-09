import { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [showNotification, setShowNotification] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Please enter a subject";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter your message";
      isValid = false;
    }

    setFieldErrors(errors);

    // Clear errors after 5 seconds
    if (!isValid) {
      setTimeout(() => {
        setFieldErrors({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 4000);
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      // Initialize EmailJS with your public key
      emailjs.init("83lqB3FTCvXHK_xC2");

      // Send email using EmailJS
      const result = await emailjs.send(
        "service_twk9vqg", // Your service ID
        "template_1rnyli9", // Your template ID
        {
          to_email: "info@societythreads.co.uk", // Your testing email
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log("Email sent successfully:", result);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }

    setShowNotification(true);

    // Hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
      setTimeout(() => setStatus("idle"), 300);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Still have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
          <div className="space-y-1">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-accent" />
                  Your Name <span className="-ml-1.5 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    fieldErrors.name ? "border-red-500" : "border-border"
                  } bg-background focus:outline-none focus:ring-2 ${
                    fieldErrors.name ? "focus:ring-red-500" : "focus:ring-accent"
                  } focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
                <div className="h-1 mt-1">
                  {fieldErrors.name && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{fieldErrors.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-accent" />
                  Email Address <span className="-ml-1.5 text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    fieldErrors.email ? "border-red-500" : "border-border"
                  } bg-background focus:outline-none focus:ring-2 ${
                    fieldErrors.email ? "focus:ring-red-500" : "focus:ring-accent"
                  } focus:border-transparent transition-all`}
                  placeholder="john@example.com"
                />
                <div className="h-6 mt-1">
                  {fieldErrors.email && (
                    <div className="flex items-center gap-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{fieldErrors.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                Subject <span className="-ml-1.5 text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  fieldErrors.subject ? "border-red-500" : "border-border"
                } bg-background focus:outline-none focus:ring-2 ${
                  fieldErrors.subject ? "focus:ring-red-500" : "focus:ring-accent"
                } focus:border-transparent transition-all`}
                placeholder="How can we help?"
              />
              <div className="h-6 mt-1">
                {fieldErrors.subject && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{fieldErrors.subject}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">
                Message <span className="-ml-0.5 text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${
                  fieldErrors.message ? "border-red-500" : "border-border"
                } bg-background focus:outline-none focus:ring-2 ${
                  fieldErrors.message ? "focus:ring-red-500" : "focus:ring-accent"
                } focus:border-transparent transition-all resize-none`}
                placeholder="Tell us more about your inquiry..."
              />
              <div className="h-6 mt-1">
                {fieldErrors.message && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{fieldErrors.message}</span>
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 hover:shadow-lg group"
            >
              {status === "loading" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Success/Error Notification */}
        <div
          className={`fixed top-4 right-4 max-w-md transition-all duration-500 transform z-50 ${
            showNotification ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {status === "success" && (
            <div className="bg-green-500 text-white rounded-lg p-4 shadow-lg flex items-start gap-3 border border-green-600">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Message Sent Successfully!</h3>
                <p className="text-sm text-green-50 mt-1">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-500 text-white rounded-lg p-4 shadow-lg flex items-start gap-3 border border-red-600">
              <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-lg">Oops! Something Went Wrong</h3>
                <p className="text-sm text-red-50 mt-1">
                  We couldn't send your message. Please try again or contact us directly at info@societythreads.co.uk
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;