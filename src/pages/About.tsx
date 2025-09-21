import { Download, Award, Code2, Shield, BookOpen, Newspaper, Monitor, Smartphone } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const qualifications = [
    {
      title: "Software Engineer",
      institution: "PLP (Certified)",
      icon: Code2,
      color: "bg-primary"
    },
    {
      title: "Cybersecurity",
      institution: "Alison",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      title: "Information System Management",
      institution: "Alison",
      icon: Monitor,
      color: "bg-blue-500"
    },
    {
      title: "Journalism and Mass Communication",
      institution: "Mount Kenya University",
      icon: Newspaper,
      color: "bg-green-500"
    },
    {
      title: "Fullstack Developer",
      institution: "PLP",
      icon: Smartphone,
      color: "bg-purple-500"
    },
    {
      title: "ICT",
      institution: "Machakos Institute of Technology",
      icon: BookOpen,
      color: "bg-orange-500"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "HTML/CSS", "MongoDB", "PostgreSQL", "Git", "Docker", "AWS",
    "Cybersecurity", "System Administration", "API Development", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen gradient-hero-bg pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-hero p-2 shadow-2xl">
            <img 
              src={profileImage} 
              alt="Dennis Maingi - Software Engineer" 
              className="w-full h-full rounded-full object-cover shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-hero bg-clip-text text-transparent">Dennis Maingi</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate software engineer with diverse expertise spanning cybersecurity, 
            fullstack development, and information systems management. I bring a unique 
            blend of technical skills and communication expertise to every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-slide-up">
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-primary" />
                  Professional Journey
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With a comprehensive educational background spanning software engineering, 
                    cybersecurity, and mass communication, I offer a unique perspective that 
                    bridges technical excellence with effective communication.
                  </p>
                  <p>
                    My journey began with ICT fundamentals at Machakos Institute of Technology, 
                    evolved through journalism at Mount Kenya University, and culminated in 
                    advanced software engineering and cybersecurity certifications.
                  </p>
                  <p>
                    Today, I specialize in building secure, scalable web applications while 
                    maintaining a strong focus on user experience and system security. My 
                    diverse background allows me to approach problems from multiple angles 
                    and communicate complex technical concepts clearly.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Email:</strong> maingidennis790@gmail.com</p>
                  <p><strong>Phone:</strong> +254 798 846 203</p>
                  <p><strong>GitHub:</strong> <a href="https://github.com/DennisMaingi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DennisMaingi</a></p>
                  <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/happy-dennis" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">happy-dennis</a></p>
                </div>
                <Button className="mt-6 gradient-primary hover:scale-105 transition-transform">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Qualifications & Skills */}
          <div className="space-y-8 animate-slide-up">
            {/* Qualifications */}
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Qualifications & Certifications</h3>
                <div className="space-y-4">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                      <div className={`p-3 rounded-lg ${qual.color}`}>
                        <qual.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{qual.title}</h4>
                        <p className="text-sm text-muted-foreground">{qual.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="gradient-card border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;