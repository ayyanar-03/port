import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
         
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/ayyanar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:scale-110 transition-transform shadow-medium"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/ayyanar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:scale-110 transition-transform shadow-medium"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ayyanarpp3@gmail.com"
              className="p-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:scale-110 transition-transform shadow-medium"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Ayyanar P
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;