const experiences = [
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest",
    period: "October 2025",
    description:
      "Contibution to 6 MERN Stack Project from which 5 PR's were sucessfully merged",
  },
  {
    role: "InHouse Intern",
    company: "KJSSE",
    period: "Dec 2025 — Jan 2026",
    description:
      "Worked on Analysis of a Dataset of AQI of Indian cities from 2122 to 2025.",
  },
];

const Experience = () => (
  <section id="experience" className="h-screen flex items-center justify-center px-6 snap-start border-b border-border">
    <div className="max-w-2xl w-full">
      <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-32 shrink-0">
              <p className="text-xs text-muted-foreground">{exp.period}</p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-foreground font-semibold">{exp.role}</h3>
              <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
