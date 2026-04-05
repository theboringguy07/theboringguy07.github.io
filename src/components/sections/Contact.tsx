import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="h-screen flex flex-col items-center justify-center snap-start">
    <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">Contact</h2>
    <div className="flex gap-12">
      <a href="https://github.com/theboringguy07" className="text-muted-foreground hover:text-foreground transition-colors">
        <Github className="w-10 h-10" />
      </a>
      <a href="https://linkedin.com/in/dhruvsingale" className="text-muted-foreground hover:text-foreground transition-colors">
        <Linkedin className="w-10 h-10" />
      </a>
      <a href="mailto:dhruvsingale@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
        <Mail className="w-10 h-10" />
      </a>
    </div>
  </section>
);

export default Contact;
