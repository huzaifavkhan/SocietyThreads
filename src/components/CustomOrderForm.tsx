import { useState } from "react";
import { Upload, Shirt, Palette, Type, MessageSquare, X, ChevronLeft, ChevronRight, CheckCircle, XCircle, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CustomOrderFormProps {
  onClose: () => void;
}

const CustomOrderForm = ({ onClose }: CustomOrderFormProps) => {
  const [formData, setFormData] = useState({
    studentName: "",
    societyName: "",
    role: "",
    email: "",
    phone: "",
    communicationMode: "",
    apparelType: "",
    orderQuantity: "",
    material: "",
    hasLogo: "",
    designPreferences: "",
    colorScheme: "",
    printText: "",
    textPlacements: [] as string[],
    additionalRequests: "",
    logoPositions: [] as string[],
    logoStyle: "",
  });

  const [logoFiles, setLogoFiles] = useState<File[]>([]);
  const [designFiles, setDesignFiles] = useState<File[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [emailError, setEmailError] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [currentSizeChartIndex, setCurrentSizeChartIndex] = useState(0);
  const [status, setStatus] = useState("idle");
  const [showNotification, setShowNotification] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileUploadProgress, setFileUploadProgress] = useState<{[key: string]: number}>({});
  const totalSteps = 4;

  // Size chart images mapping
  const sizeCharts = [
    { name: "Hoodie", image: "/Size charts/Hoodie size chart.jpeg" },
    { name: "Joggers", image: "/Size charts/Joggers size chart.png" },
    { name: "Oversized T-shirts", image: "/Size charts/Oversized T-shirts size chart.jpg" },
    { name: "Quarter-zippers", image: "/Size charts/Quarter-zippers size chart.png" },
    { name: "Shorts", image: "/Size charts/Shorts size.png" },
    { name: "T-shirts", image: "/Size charts/T-shirts size chart.png" },
  ];

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email change with validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  // Handle logo file upload (multiple files, max 8)
  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    
    // Check total file count (existing + new)
    if (logoFiles.length + newFiles.length > 8) {
      alert(`You can only upload up to 8 logo files total. You currently have ${logoFiles.length} file(s).`);
      return;
    }
    
    // Validate file size (20MB per file)
    const oversizedFiles = newFiles.filter(file => file.size > 20 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      alert("Each file must be less than 20MB");
      return;
    }
    
    // Simulate upload progress for each file
    for (const file of newFiles) {
      const fileId = `logo-${file.name}-${Date.now()}`;
      
      // Simulate progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFileUploadProgress(prev => ({...prev, [fileId]: progress}));
        
        if (progress >= 100) {
          clearInterval(interval);
          // Remove progress after upload complete
          setTimeout(() => {
            setFileUploadProgress(prev => {
              const updated = {...prev};
              delete updated[fileId];
              return updated;
            });
          }, 500);
        }
      }, 100);
    }
    
    // Append new files to existing files
    setLogoFiles(prev => [...prev, ...newFiles]);
    
    // Reset input so same file can be selected again if needed
    e.target.value = '';
  };

  // Handle design file upload (multiple files, max 8)
  const handleDesignUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    
    // Check total file count (existing + new)
    if (designFiles.length + newFiles.length > 8) {
      alert(`You can only upload up to 8 design files total. You currently have ${designFiles.length} file(s).`);
      return;
    }
    
    // Validate file size (20MB per file)
    const oversizedFiles = newFiles.filter(file => file.size > 20 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      alert("Each file must be less than 20MB");
      return;
    }
    
    // Simulate upload progress for each file
    for (const file of newFiles) {
      const fileId = `design-${file.name}-${Date.now()}`;
      
      // Simulate progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFileUploadProgress(prev => ({...prev, [fileId]: progress}));
        
        if (progress >= 100) {
          clearInterval(interval);
          // Remove progress after upload complete
          setTimeout(() => {
            setFileUploadProgress(prev => {
              const updated = {...prev};
              delete updated[fileId];
              return updated;
            });
          }, 500);
        }
      }, 100);
    }
    
    // Append new files to existing files
    setDesignFiles(prev => [...prev, ...newFiles]);
    
    // Reset input so same file can be selected again if needed
    e.target.value = '';
  };

  // Remove logo file
  const removeLogoFile = (index: number) => {
    setLogoFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Remove design file
  const removeDesignFile = (index: number) => {
    setDesignFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxPWKOsefioy6FCDoptbHmgB6fL7QILIuRRubr6z4KHDbczFHwkyHsNVWp2bYJ7L8U/exec';
    
    setStatus("loading");
    setUploadProgress(10);
    
    try {
      console.log('Starting file conversion...');
      
      // Convert files to base64
      const logoFilesBase64 = await Promise.all(
        logoFiles.map(async (file) => ({
          name: file.name,
          data: await fileToBase64(file),
          mimeType: file.type
        }))
      );
      
      console.log(`Converted ${logoFilesBase64.length} logo files`);
      setUploadProgress(40);
      
      const designFilesBase64 = await Promise.all(
        designFiles.map(async (file) => ({
          name: file.name,
          data: await fileToBase64(file),
          mimeType: file.type
        }))
      );
      
      console.log(`Converted ${designFilesBase64.length} design files`);
      setUploadProgress(60);
      
      // Prepare submission data
      const submissionData = {
        ...formData,
        logoFiles: logoFilesBase64,
        designFiles: designFilesBase64,
        textPlacements: formData.textPlacements.join(', '),
        logoPositions: formData.logoPositions.join(', ')
      };
      
      console.log('Submission data prepared:', {
        ...submissionData,
        logoFiles: `${logoFilesBase64.length} files`,
        designFiles: `${designFilesBase64.length} files`
      });
      
      setUploadProgress(80);
      
      console.log('Sending to Google Apps Script...');
      
      // Using no-cors mode for Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(submissionData)
      });
      
      console.log('Request sent (no-cors mode)');
      
      setUploadProgress(100);
      
      // With no-cors, we can't read the response, but if no error was thrown, assume success
      setStatus("success");
      
      // Reset form after successful submission
      setFormData({
        studentName: "",
        societyName: "",
        role: "",
        email: "",
        phone: "",
        communicationMode: "",
        apparelType: "",
        orderQuantity: "",
        material: "",
        hasLogo: "",
        designPreferences: "",
        colorScheme: "",
        printText: "",
        textPlacements: [],
        additionalRequests: "",
        logoPositions: [],
        logoStyle: "",
      });
      setLogoFiles([]);
      setDesignFiles([]);
      setCurrentStep(1);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("error");
    }
    
    setShowNotification(true);
    setUploadProgress(0);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
      setTimeout(() => {
        setStatus("idle");
        if (status === "success") {
          onClose();
        }
      }, 300);
    }, 5000);
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.studentName &&
          formData.societyName &&
          formData.email &&
          validateEmail(formData.email) &&
          !emailError
        );
      case 2:
        return formData.apparelType && formData.orderQuantity;
      case 3:
        return formData.hasLogo;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleTextPlacementToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      textPlacements: prev.textPlacements.includes(value)
        ? prev.textPlacements.filter((item) => item !== value)
        : [...prev.textPlacements, value],
    }));
  };

  const handleLogoPositionToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      logoPositions: prev.logoPositions.includes(value)
        ? prev.logoPositions.filter((item) => item !== value)
        : [...prev.logoPositions, value],
    }));
  };

  const handlePreviousSizeChart = () => {
    setCurrentSizeChartIndex((prev) => 
      prev === 0 ? sizeCharts.length - 1 : prev - 1
    );
  };

  const handleNextSizeChart = () => {
    setCurrentSizeChartIndex((prev) => 
      prev === sizeCharts.length - 1 ? 0 : prev + 1
    );
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="flex flex-col h-full overflow-hidden max-h-[85vh]">
      {/* Progress Header */}
      <div className="flex-shrink-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 md:px-8 py-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Your Custom Order
          </h2>
          <p className="text-primary-foreground/90 text-sm md:text-base">
            Where your logo, your colours, and your vibe become wearable statements.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                index + 1 <= currentStep ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-primary-foreground/80 mt-2">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Type className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Personal Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Let's start with your information
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="studentName" className="text-base">
                    Student Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="studentName"
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                    className="mt-1.5 h-11"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="societyName" className="text-base">
                    University Society Name{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="societyName"
                    value={formData.societyName}
                    onChange={(e) =>
                      setFormData({ ...formData, societyName: e.target.value })
                    }
                    className="mt-1.5 h-11"
                    placeholder="e.g., Computer Science Society"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-base">
                    Role / Designation in the society
                  </Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="mt-1.5 h-11"
                    placeholder="e.g., President, Marketing Head"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">
                    E-mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={`mt-1.5 h-11 ${
                      emailError ? "border-destructive focus-visible:ring-destructive" : ""
                    }`}
                    placeholder="your.email@university.edu"
                    required
                  />
                  {emailError && (
                    <p className="text-xs text-destructive mt-1.5">{emailError}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-1.5 h-11"
                    placeholder="+44 7XXX XXXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="communicationMode" className="text-base">
                    Preferred mode of communication{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.communicationMode}
                    onValueChange={(value) =>
                      setFormData({ ...formData, communicationMode: value })
                    }
                  >
                    <SelectTrigger className="mt-1.5 h-11">
                      <SelectValue placeholder="Select your preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="instagram">Instagram DM</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Product Details */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shirt className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Product & Order Quantity</h3>
                  <p className="text-sm text-muted-foreground">
                    Discounts applicable for bulk orders
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="apparelType" className="text-base">
                    Type of Apparel <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.apparelType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, apparelType: value })
                    }
                  >
                    <SelectTrigger className="mt-1.5 h-11">
                      <SelectValue placeholder="Choose your apparel type" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px] overflow-y-auto">
                      <SelectItem value="hoodies">Hoodies</SelectItem>
                      <SelectItem value="tshirts">T-Shirts</SelectItem>
                      <SelectItem value="quarter-zips">Quarter-Zips</SelectItem>
                      <SelectItem value="jerseys">Jerseys</SelectItem>
                      <SelectItem value="fleeces">Fleeces</SelectItem>
                      <SelectItem value="sportswear">Sportswear</SelectItem>
                      <SelectItem value="joggers">Joggers</SelectItem>
                      <SelectItem value="shorts">Shorts</SelectItem>
                      <SelectItem value="caps">Caps</SelectItem>
                      <SelectItem value="tote-bags">Tote Bags</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base mb-3 block">
                    Estimated Order Quantity{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.orderQuantity}
                    onValueChange={(value) =>
                      setFormData({ ...formData, orderQuantity: value })
                    }
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="1-24" id="qty1" />
                      <Label htmlFor="qty1" className="flex-1 cursor-pointer">
                        <div className="font-medium">1-24 pieces</div>
                        <div className="text-sm text-muted-foreground">
                          Standard pricing
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="25+" id="qty2" />
                      <Label htmlFor="qty2" className="flex-1 cursor-pointer">
                        <div className="font-medium">25+ pieces</div>
                        <div className="text-sm text-green-600 font-medium">
                          10% Discount
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="50+" id="qty3" />
                      <Label htmlFor="qty3" className="flex-1 cursor-pointer">
                        <div className="font-medium">50+ pieces</div>
                        <div className="text-sm text-green-600 font-medium">
                          15% Discount
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="material" className="text-base">
                    Preferred Material / Fabric
                  </Label>
                  <Select
                    value={formData.material}
                    onValueChange={(value) =>
                      setFormData({ ...formData, material: value })
                    }
                  >
                    <SelectTrigger className="mt-1.5 h-11">
                      <SelectValue placeholder="Choose your preferred material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="not-sure">Not sure/ Recommend based on design</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="polyester">Polyester</SelectItem>
                      <SelectItem value="fleece">Fleece</SelectItem>
                      <SelectItem value="cvc">CVC</SelectItem>
                      <SelectItem value="dri-fit">Dri-fit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    For size charts,{" "}
                    <a 
                      href="#" 
                      className="text-primary hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowSizeChart(true);
                      }}
                    >
                      click here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Logo & Design Concept */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Logo & Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Share your design vision with us
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-base mb-3 block">
                    Do you have a logo or design concept?{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.hasLogo}
                    onValueChange={(value) =>
                      setFormData({ ...formData, hasLogo: value })
                    }
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="yes" id="logo-yes" />
                      <Label htmlFor="logo-yes" className="flex-1 cursor-pointer">
                        <div className="font-medium">Yes, I have a logo/design</div>
                        <div className="text-sm text-muted-foreground">
                          Upload your files below
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="no" id="logo-no" />
                      <Label htmlFor="logo-no" className="flex-1 cursor-pointer">
                        <div className="font-medium">
                          No, I need help with design
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Our team will create designs for you
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* File Upload Section - Only show if "Yes" is selected */}
                {formData.hasLogo === "yes" && (
                  <>
                    {/* Logo Upload */}
                    <div className="space-y-3">
                      <Label htmlFor="logoUpload" className="text-base">
                        Upload Your Logo
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Upload up to 8 files. Max 20 MB per file. Click multiple times to add more files.
                      </p>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                        <input
                          id="logoUpload"
                          type="file"
                          multiple
                          accept="image/*,.pdf,.ai,.eps,.svg"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="logoUpload"
                          className="flex flex-col items-center justify-center cursor-pointer"
                        >
                          <FileUp className="h-10 w-10 text-muted-foreground mb-2" />
                          <span className="text-sm font-medium">Click to upload</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            PNG, JPG, PDF, AI, EPS, SVG
                          </span>
                        </label>
                      </div>
                      
                      {/* Display uploaded logo files */}
                      {logoFiles.length > 0 && (
                        <div className="space-y-2 mt-3">
                          {logoFiles.map((file, index) => {
                            const fileId = `logo-${file.name}-${Date.now()}`;
                            const progress = fileUploadProgress[fileId];
                            
                            return (
                              <div key={index} className="space-y-1">
                                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                  <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <FileUp className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-sm truncate">{file.name}</span>
                                    <span className="text-xs text-muted-foreground flex-shrink-0">
                                      ({formatFileSize(file.size)})
                                    </span>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeLogoFile(index)}
                                    className="h-8 w-8 p-0 flex-shrink-0"
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                                {progress !== undefined && progress < 100 && (
                                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary transition-all duration-300"
                                      style={{ width: `${progress}%` }}
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Design Concept Upload */}
                    <div className="space-y-3">
                      <Label htmlFor="designUpload" className="text-base">
                        Upload Your Design Concept/Sketch
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Upload up to 8 files. Max 20 MB per file. Click multiple times to add more files.
                      </p>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                        <input
                          id="designUpload"
                          type="file"
                          accept="image/*,.pdf"
                          onChange={handleDesignUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="designUpload"
                          className="flex flex-col items-center justify-center cursor-pointer"
                        >
                          <FileUp className="h-10 w-10 text-muted-foreground mb-2" />
                          <span className="text-sm font-medium">Click to upload</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            PNG, JPG, PDF
                          </span>
                        </label>
                      </div>
                      
                      {/* Display uploaded design files */}
                      {designFiles.length > 0 && (
                        <div className="space-y-2 mt-3">
                          {designFiles.map((file, index) => {
                            const fileId = `design-${file.name}-${Date.now()}`;
                            const progress = fileUploadProgress[fileId];
                            
                            return (
                              <div key={index} className="space-y-1">
                                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                  <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <FileUp className="h-4 w-4 text-primary flex-shrink-0" />
                                    <span className="text-sm truncate">{file.name}</span>
                                    <span className="text-xs text-muted-foreground flex-shrink-0">
                                      ({formatFileSize(file.size)})
                                    </span>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeDesignFile(index)}
                                    className="h-8 w-8 p-0 flex-shrink-0"
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                                {progress !== undefined && progress < 100 && (
                                  <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary transition-all duration-300"
                                      style={{ width: `${progress}%` }}
                                    />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Logo Position - Multi-select */}
                    <div>
                      <Label className="text-base mb-3 block">Logo Position</Label>
                      <div className="space-y-2">
                        {[
                          { value: "front-center", label: "Front (centre)" },
                          { value: "front-left", label: "Front (left chest)" },
                          { value: "front-right", label: "Front (right chest)" },
                          { value: "back", label: "Back" },
                          { value: "sleeve", label: "Sleeve" },
                          { value: "other", label: "Other" },
                        ].map((position) => (
                          <div
                            key={position.value}
                            className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                          >
                            <Checkbox
                              id={`logo-${position.value}`}
                              checked={formData.logoPositions.includes(
                                position.value
                              )}
                              onCheckedChange={() =>
                                handleLogoPositionToggle(position.value)
                              }
                            />
                            <Label
                              htmlFor={`logo-${position.value}`}
                              className="flex-1 cursor-pointer"
                            >
                              {position.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Logo Style */}
                    <div>
                      <Label htmlFor="logoStyle" className="text-base">
                        Preferred Logo Style
                      </Label>
                      <Select
                        value={formData.logoStyle}
                        onValueChange={(value) =>
                          setFormData({ ...formData, logoStyle: value })
                        }
                      >
                        <SelectTrigger className="mt-1.5 h-11">
                          <SelectValue placeholder="Select logo style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="print">Print</SelectItem>
                          <SelectItem value="embroidery">Embroidery</SelectItem>
                          <SelectItem value="not-sure">Not sure / Recommend based on design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="designPreferences" className="text-base">
                    Design Preferences or ideas
                  </Label>
                  <Textarea
                    id="designPreferences"
                    value={formData.designPreferences}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        designPreferences: e.target.value,
                      })
                    }
                    className="mt-1.5 min-h-[100px]"
                    placeholder="Describe your design vision, style preferences, or any inspiration..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Design Details */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Design Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Final touches for your custom apparel
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="colorScheme" className="text-base">
                    Colour Scheme (If Any)
                  </Label>
                  <Input
                    id="colorScheme"
                    value={formData.colorScheme}
                    onChange={(e) =>
                      setFormData({ ...formData, colorScheme: e.target.value })
                    }
                    className="mt-1.5 h-11"
                    placeholder="E.g. - Beige #8a7e7e"
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    You can provide color names or hex codes
                  </p>
                </div>

                <div>
                  <Label htmlFor="printText" className="text-base">
                    What text would you like to get printed?
                  </Label>
                  <Input
                    id="printText"
                    value={formData.printText}
                    onChange={(e) =>
                      setFormData({ ...formData, printText: e.target.value })
                    }
                    className="mt-1.5 h-11"
                    placeholder='E.g. - "NTU Law 2025"'
                  />
                </div>

                <div>
                  <Label className="text-base mb-3 block">Text placement</Label>
                  <div className="space-y-2">
                    {[
                      { value: "front-center", label: "Front (centre)" },
                      { value: "front-left", label: "Front (left chest)" },
                      { value: "front-right", label: "Front (right chest)" },
                      { value: "back", label: "Back" },
                      { value: "other", label: "Other" },
                    ].map((placement) => (
                      <div
                        key={placement.value}
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <Checkbox
                          id={placement.value}
                          checked={formData.textPlacements.includes(
                            placement.value
                          )}
                          onCheckedChange={() =>
                            handleTextPlacementToggle(placement.value)
                          }
                        />
                        <Label
                          htmlFor={placement.value}
                          className="flex-1 cursor-pointer"
                        >
                          {placement.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="additionalRequests" className="text-base">
                    Additional Request
                  </Label>
                  <Textarea
                    id="additionalRequests"
                    value={formData.additionalRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalRequests: e.target.value,
                      })
                    }
                    className="mt-1.5 min-h-[100px]"
                    placeholder="Any special requests, deadline requirements, or additional information..."
                  />
                </div>
              </div>

              {/* Success Message Preview */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">What happens next?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Within 48 hours, you'll receive custom mock-ups based on
                      your inputs for FREE sent directly to your preferred mode
                      of communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Navigation */}
        <div className="flex-shrink-0 bg-background border-t px-6 md:px-8 py-4 flex items-center justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-6"
          >
            Back
          </Button>

          <div className="flex items-center gap-3">
            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className="px-8"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={status === "loading"}
                className="px-4 sm:px-8 h-10 sm:h-11 text-sm sm:text-base bg-gradient-to-r from-primary to-primary/80"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  "Submit Order"
                )}
              </Button>
            )}
          </div>
        </div>
      </form>

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
              <h3 className="font-semibold text-lg">Order Submitted Successfully!</h3>
              <p className="text-sm text-green-50 mt-1">
                Thank you for your order! We'll send you custom mock-ups within 48 hours.
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
                We couldn't submit your order. Please try again or contact us directly at societythreads.info@gmail.com
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Size Chart Modal */}
      {showSizeChart && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold">
                {sizeCharts[currentSizeChartIndex].name} Size Chart
              </h3>
              <button
                onClick={() => setShowSizeChart(false)}
                className="h-8 w-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {/* Image Display */}
              <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-muted/20">
                <img
                  src={sizeCharts[currentSizeChartIndex].image}
                  alt={`${sizeCharts[currentSizeChartIndex].name} size chart`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Navigation */}
              <div className="px-3 sm:px-6 py-3 sm:py-4 border-t flex items-center justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePreviousSizeChart}
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </Button>

                <div className="flex gap-1.5 sm:gap-2">
                  {sizeCharts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSizeChartIndex(index)}
                      className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all ${
                        index === currentSizeChartIndex
                          ? "bg-primary w-4 sm:w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleNextSizeChart}
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-10"
                >
                  <span className="sm:hidden">Next</span>
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomOrderForm;