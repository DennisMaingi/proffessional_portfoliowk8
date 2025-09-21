import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maingidennis790@gmail.com",
      href: "mailto:maingidennis790@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 798 846 203",
      href: "tel:+254798846203"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kenya",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DennisMaingi",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/happy-dennis",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen gradient-hero-bg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-hero bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and 
            how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 mr-3 text-primary" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, ideas, or just say hello!"
                      rows={6}
                      required
                      className="focus:ring-primary focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary hover:scale-105 transition-transform"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            {/* Contact Details */}
            <Card className="gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="p-3 rounded-lg gradient-primary">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.label}</h3>
                      {item.href && item.href !== "#" ? (
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 group hover:scale-105"
                    >
                      <div className="p-3 rounded-lg gradient-primary group-hover:scale-110 transition-transform">
                        <social.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {social.label}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Follow me on {social.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ready to Start a Project?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm available for freelance work and full-time opportunities. 
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="flex-1 hover:bg-primary/10"
                  >
                    <a href="mailto:maingidennis790@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="flex-1 hover:bg-primary/10"
                  >
                    <a href="tel:+254798846203">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;