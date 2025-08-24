import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Award, 
  Trophy, 
  Users,
  Calendar,
  Building
} from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      title: "3rd Prize - HackIT 3.0 Hackathon",
      description: "Secured 3rd position among 38+ participating teams in a 24-hour hackathon competition, demonstrating exceptional problem-solving and teamwork skills.",
      icon: Trophy,
      date: "2024",
      type: "Competition",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Event Organizer - Code Hunters",
      description: "Successfully organized and managed the Department Symposium at Sri Venkateswara College of Engineering, coordinating technical events and competitions.",
      icon: Users,
      date: "February 2024",
      type: "Leadership",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "IoT Intern",
      description: "Completed professional internship at Pantech E-learning, developing IoT-based parking solutions using IR sensors and real-time monitoring systems.",
      icon: Building,
      date: "December 2023",
      type: "Professional Experience",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const certifications = [
    "Java Foundation Certification",
    "Git Foundation Certification", 
    "Data Analytics with Python"
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience, leadership roles, and recognition in competitive environments
          </p>
        </div>

        {/* Professional Experience & Achievements */}
        <div className="space-y-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title} 
              className="gradient-card border-0 shadow-medium hover:shadow-large transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Date */}
                  <div className="flex flex-col items-center md:items-start md:w-48">
                    <div className={`p-4 bg-gradient-to-r ${achievement.color} rounded-lg group-hover:scale-110 transition-transform`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <h3 className="text-xl font-semibold mb-2 md:mb-0">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{achievement.date}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert} 
                className="p-6 gradient-card border-0 shadow-medium hover:shadow-large transition-smooth group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg inline-block group-hover:scale-110 transition-transform">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{cert}</h4>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-gradient-primary text-white">
            <div className="text-3xl font-bold mb-2">4+</div>
            <div className="text-white/90">Years of Learning</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-primary text-white">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-white/90">Certifications</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-primary text-white">
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-white/90">Hackathon Win</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-primary text-white">
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-white/90">Leadership Roles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;