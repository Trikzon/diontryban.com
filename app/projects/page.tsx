import styles from "./page.module.scss";

const Projects = () => {
  const projects = [
    {
      title: "tryban.dev",
      slug: "tryban-dev",
      summary: "This website! Built with Next.js, React, and Content Collections",
      tags: ["completed", "godot", "school", "mc-mod"],
    },
    {
      title: "Ash API",
      slug: "ash-api",
      summary: "A Minecraft mod library that wraps around the Fabric and Neoforge modloader APIs.",
      tags: ["completed", "godot", "school", "mc-mod"],
    },
  ];

  return (
    <>
      <h1>Projects</h1>
      <div className={styles["project-list"]}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.project}>
            <div className={styles.logo}>
              <img src={`/projects/${project.slug}/logo.png`} alt={`${project.title} logo`} />
            </div>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;

