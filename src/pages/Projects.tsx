import { ExternalLink, Github, Calculator, Cloud, Code2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Advanced Calculator",
      description: "A feature-rich calculator application with scientific functions, history tracking, and responsive design. Built with modern JavaScript and elegant UI components.",
      image: "/placeholder.svg",
      technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      category: "Web Application",
      status: "Live",
      icon: Calculator,
      liveUrl: "https://github.com/DennisMaingi",
      githubUrl: "https://github.com/DennisMaingi",
      features: ["Scientific calculations", "History tracking", "Keyboard shortcuts", "Theme switching"]
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features clean design and smooth animations.",
      image: "/placeholder.svg",
      technologies: ["React", "API Integration", "Geolocation", "Chart.js"],
      category: "Mobile-First App",
      status: "Live",
      icon: Cloud,
      liveUrl: "https://github.com/DennisMaingi",
      githubUrl: "https://github.com/DennisMaingi",
      features: ["Real-time updates", "Location detection", "7-day forecast", "Weather maps"]
    },
    {
      id: 3,
      title: "Fullstack E-Commerce",
      description: "Complete e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Built with modern tech stack.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Fullstack Application",
      status: "In Development",
      icon: Smartphone,
      liveUrl: "https://github.com/DennisMaingi",
      githubUrl: "https://github.com/DennisMaingi",
      features: ["User authentication", "Payment processing", "Admin dashboard", "Inventory management"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing professional skills and projects. Features smooth animations, contact forms, and optimized performance.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Personal Website",
      status: "Live",
      icon: Code2,
      liveUrl: "#",
      githubUrl: "https://github.com/DennisMaingi",
      features: ["Responsive design", "Contact forms", "SEO optimized", "Fast loading"]
    }
  ];

  const categories = ["All", "Web Application", "Mobile-First App", "Fullstack Application", "Personal Website"];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in software development, 
            from simple calculators to complex fullstack applications.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "gradient-primary" : "hover:bg-primary/10"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 animate-slide-up">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gradient-card border-0 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-primary animate-float" />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className={project.status === "Live" ? "bg-tech" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    asChild 
                    variant="default" 
                    size="sm" 
                    className="flex-1 gradient-primary hover:scale-105 transition-transform"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary/10"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up">
          <Card className="gradient-card border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <Button asChild className="gradient-primary hover:scale-105 transition-transform">
                <a href="/contact">Get In Touch</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;