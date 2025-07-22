import styles from "./page.module.scss";

interface Project {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  dateStarted: Date;
}

const Projects = () => {
  const allProjects: Project[] = [
    {
      title: "tryban.dev",
      slug: "tryban-dev",
      summary: "This website! Built with Next.js, React, and Content Collections.",
      tags: ["completed", "godot", "school", "mc-mod"],
      dateStarted: new Date("2025-01-01"),
    },
    {
      title: "Ash API",
      slug: "ash-api",
      summary: "A Minecraft mod library that wraps around the Fabric and Neoforge modloader APIs.",
      tags: ["completed", "godot", "school", "mc-mod"],
      dateStarted: new Date("2023-01-01"),
    },
  ];

  const sortedProjects = allProjects.sort(
    (a, b) => b.dateStarted.getTime() - a.dateStarted.getTime()
  );

  const projectsByYear = sortedProjects.reduce(
    (acc, project) => {
      const year = project.dateStarted.getUTCFullYear();

      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);

      return acc;
    },
    {} as Record<number, Project[]>
  );

  const sortedYears = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);

  return (
    <>
      <h1>Projects</h1>
      {sortedYears.map((year, index) => (
        <div key={year}>
          {index != 0 && 
            <div className={styles["year-hr"]} role="separator" aria-orientation="horizontal" aria-label={`${year}`}>
              —{year}—
            </div>
          }
          <ul className={styles["project-list"]}>
            {projectsByYear[year].map((project) => (
              <li key={project.slug} className={styles.project}>
                <a href={`/projects/${project.slug}`} className={styles.logo}>
                  <img src={`/projects/${project.slug}/logo.png`} alt={`${project.title} logo`} />
                </a>
                <div className={styles.info}>
                  <h2>
                    <a href={`/project/${project.slug}`}>
                      {project.title}
                    </a>
                  </h2>
                  <div className={styles.summary}>
                    {project.summary}
                  </div>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <div key={`${project.slug}#${tag}`} className={styles.tag}>
                        #{tag}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Projects;

