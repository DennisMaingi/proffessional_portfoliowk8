import { ArrowRight, Code2, Shield, Users, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    { name: "Frontend Development", icon: Code2, description: "React, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: Code2, description: "Node.js, Python, MongoDB, PostgreSQL" },
    { name: "Cybersecurity", icon: Shield, description: "Security audits, penetration testing" },
    { name: "Project Management", icon: Users, description: "Agile methodologies, team leadership" }
  ];

  const featuredProjects = [
    {
      title: "Advanced Calculator",
      description: "Scientific calculator with history tracking",
      tech: ["JavaScript", "CSS3", "HTML5"]
    },
    {
      title: "Weather App",
      description: "Real-time weather with location services",
      tech: ["React", "API Integration", "Charts"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack shopping experience",
      tech: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="gradient-hero bg-clip-text text-transparent">
                    Dennis Maingi
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  Software Engineer & Cybersecurity Specialist
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  I craft secure, scalable web applications with a unique blend of technical expertise 
                  and communication skills. From fullstack development to cybersecurity solutions, 
                  I bring ideas to life with clean code and thoughtful design.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-primary hover:scale-105 transition-transform">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-primary/10">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center space-x-6 pt-4">
                <a 
                  href="https://github.com/DennisMaingi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/happy-dennis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:maingidennis790@gmail.com"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-md"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full gradient-hero animate-float"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Code2 className="h-24 w-24 mx-auto mb-4 animate-pulse" />
                    <p className="text-lg font-semibold">Building the Future</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 animate-float" style={{animationDelay: '0.5s'}}>
                <Badge className="bg-tech shadow-lg">React Developer</Badge>
              </div>
              <div className="absolute top-1/4 -right-8 animate-float" style={{animationDelay: '1s'}}>
                <Badge className="bg-primary shadow-lg">Cybersecurity</Badge>
              </div>
              <div className="absolute -bottom-4 left-1/4 animate-float" style={{animationDelay: '1.5s'}}>
                <Badge className="bg-purple-500 shadow-lg">Fullstack</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="gradient-hero bg-clip-text text-transparent">Specialize In</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 gradient-card border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="p-4 rounded-full gradient-primary w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <skill.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of recent work demonstrating my skills in web development and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-slide-up">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gradient-card border-0"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-slide-up">
            <Button asChild variant="outline" size="lg" className="hover:bg-primary/10">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <Card className="gradient-card border-0 shadow-xl">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something <span className="gradient-hero bg-clip-text text-transparent">Amazing?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm available for freelance projects and full-time opportunities. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-primary hover:scale-105 transition-transform">
                  <Link to="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-primary/10">
                  <a href="mailto:maingidennis790@gmail.com">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
