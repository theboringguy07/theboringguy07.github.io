import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => (
  <section className="h-screen flex items-center snap-start border-b border-border">
    <div className="w-1/2 h-full flex items-center justify-center border-r border-border">
      <img
        src={profilePhoto}
        alt="Dhruv Ingale"
        className="h-1/2 w-auto object-cover"
        width={512}
        height={640}
      />
    </div>
    <div className="w-1/2 flex flex-col justify-center px-12 lg:px-16">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 animate-fade-in">
        Open Source Contributor & Tech Enthusiast
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
        Dhruv Ingale
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-10 animate-fade-in-delay-2">
        I build clean, performant web applications with modern technologies.
      </p>
      <div className="flex gap-4 animate-fade-in-delay-3">
        <Button asChild>
          <a href="#projects">View Work</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
