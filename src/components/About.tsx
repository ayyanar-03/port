import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate B.Tech IT graduate with strong foundation in software development and emerging technologies
          </p>
        </div>

  
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
               <div className="flex justify-center animate-fade-in-up">
    <img
      src="public/ayyanar.jpg"
      alt=""
      className="w-48 h-48 rounded-full object-cover shadow-lg"
    />
  </div>
                A deep passion for software development, problem solving, and continuous learning. I bring strong technical foundations and hands-on experience in full-stack development, computer vision, and machine learning. I've built and deployed real-time systems, worked on diverse tech stacks ranging from Python and Java to React and Firebase, and actively participate in technical events and hackathons to enhance my problem-solving and collaboration skills.
              </p>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 gradient-card border-0 shadow-medium hover:shadow-large transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Technology</h3>
                  <p className="text-primary font-medium mb-1">Information Technology</p>
                  <p className="text-sm text-muted-foreground mb-2">Sri Venkateswara College of Engineering, Chennai</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">CGPA: 7.6/10</span>
                    <span className="text-sm text-muted-foreground">2021-2025</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card border-0 shadow-medium hover:shadow-large transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Higher Secondary Certificate</h3>
                  <p className="text-primary font-medium mb-1">Biology and Mathematics</p>
                  <p className="text-sm text-muted-foreground mb-2">Government Higher Secondary School, Virudhunagar</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">Score: 85%</span>
                    <span className="text-sm text-muted-foreground">2020-2021</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-card border-0 shadow-medium hover:shadow-large transition-smooth">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Secondary School Leaving Certificate</h3>
                  <p className="text-sm text-muted-foreground mb-2">Government Higher Secondary School, Virudhunagar</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">Score: 86.2%</span>
                    <span className="text-sm text-muted-foreground">2018-2019</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;