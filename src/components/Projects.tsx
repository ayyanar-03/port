import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  Brain, 
  Leaf, 
  Film,
  Car
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gesture Comm: ASL Communication Bridge",
      description: "Advanced machine learning model bridging ASL and text/speech communication with 98% accuracy using MediaPipe and LSTM networks.",
      icon: Brain,
      highlights: [
        "98% accuracy in real-time ASL recognition",
        "MediaPipe integration for precise landmark detection",
        "LSTM networks for temporal dynamics understanding",
        "Real-time interface for seamless communication"
      ],
      technologies: ["Python", "MediaPipe", "LSTM", "TensorFlow", "Computer Vision"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Medicinal Plant Detection System",
      description: "Deep learning ensemble model combining VGG16 and EfficientNet for accurate medicinal plant identification from leaf images.",
      icon: Leaf,
      highlights: [
        "Ensemble model with VGG16 and EfficientNet",
        "Data augmentation and transfer learning",
        "Real-time plant identification capabilities",
        "Optimized feature extraction for complex datasets"
      ],
      technologies: ["Python", "VGG16", "EfficientNet", "Deep Learning", "Image Classification"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Movie Streaming Platform",
      description: "Dynamic movie streaming platform built with React.js and Firebase, featuring real-time data display and secure authentication.",
      icon: Film,
      highlights: [
        "React.js with TMDB API integration",
        "Responsive and interactive UI design",
        "Firebase Authentication system",
        "User data and watch history management"
      ],
      technologies: ["React.js", "Firebase", "TMDB API", "Authentication", "Responsive Design"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Car Parking System",
      description: "IoT-based parking management system using IR sensors for real-time space detection and automated notifications.",
      icon: Car,
      highlights: [
        "IR sensor integration for vehicle detection",
        "Real-time parking space monitoring",
        "Automated notification system",
        "Display board for parking availability"
      ],
      technologies: ["IoT", "IR Sensors", "Arduino", "Real-time Systems", "Hardware Integration"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in Machine Learning, Web Development, and IoT
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden gradient-card border-0 shadow-medium hover:shadow-large transition-smooth group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`h-36 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6 flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg shadow-medium">
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="px-2 py-1 text-xs bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

               
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
  size="lg" 
  variant="outline" 
  className="border-primary/30 hover:bg-primary/10 px-8" 
  asChild
>
  <a 
    href="https://github.com/ayyanar-03" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Github className="w-5 h-5 mr-2" />
    View All Projects on GitHub
  </a>
</Button>

        </div>
      </div>
    </section>
  );
};

export default Projects;