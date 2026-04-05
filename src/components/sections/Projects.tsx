const projects = [
  {
    title: "Stock Price Viewer",
    description: "Simple Java GUI that fetches data from the Upstox API and Displays it.",
    tags: ["Java", "Upstox API"],
  },
  {
    title: "AQI Analysis of Indian Cities",
    description: "A Simple Streamlit Dashboard which displays the processed data of AQI from the dataset.",
    tags: ["Python"],
  },
];

const Projects = () => (
  <section
    id="projects"
    className="h-screen flex items-center justify-center px-6 snap-start border-b border-border"
  >
    <div className="max-w-3xl w-full">
      <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
        Projects
      </h2>

      {/* Centered layout */}
      <div className="flex flex-wrap justify-center gap-6 border border-border p-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 border border-border hover:bg-secondary transition-colors max-w-sm w-full"
          >
            <h3 className="text-foreground font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground border border-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
