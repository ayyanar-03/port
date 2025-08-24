import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Wrench, 
  Globe, 
  Cpu,
  BookOpen
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C", "Python", "JavaScript", "HTML", "CSS"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React.js", "HTML5", "CSS3", "Responsive Design", "Modern UI/UX"],
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Database & Analytics",
      icon: Database,
      skills: ["MySQL", "Data Analytics", "Database Design"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Visual Studio Code", "Apache NetBeans", "Git", "Firebase", "MS Office"],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Machine Learning & AI",
      icon: Cpu,
      skills: ["Deep Learning", "Computer Vision", "MediaPipe", "LSTM Networks", "TensorFlow"],
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Certifications",
      icon: BookOpen,
      skills: ["Java Foundation", "Git Foundation", "Data Analytics with Python"],
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical skills and certifications that drive my passion for innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 gradient-card border-0 shadow-medium hover:shadow-large transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-lg group-hover:scale-110 transition-transform shadow-medium`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Professional Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Professional Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gradient-primary text-white">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/90">Accuracy in ASL Recognition Model</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-primary text-white">
              <div className="text-3xl font-bold mb-2">3rd</div>
              <div className="text-white/90">Prize in HackIT 3.0 Hackathon</div>
            </div>
            <div className="p-6 rounded-lg bg-gradient-primary text-white">
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-white/90">Major Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;