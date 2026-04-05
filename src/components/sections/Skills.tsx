const skillGroups = [
  {
    category:"Languages",
    skills: ["Python", "C/C++" , "Python" , "Java" ,"JavaScript"],
  },
{
    category: "Tools",
    skills: ["Git", "Github", "Docker", "AWS"],
  },

  {
    category: "Others",
    skills: ["PostgreSQL", "REST APIs"],
  },
  ];

const Skills = () => (
  <section id="skills" className="h-screen flex items-center justify-center px-6 snap-start border-b border-border">
    <div className="max-w-2xl w-full">
      <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">Skills</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-widest">
              {group.category}
            </h3>
            <div className="flex flex-col gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-muted-foreground text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
