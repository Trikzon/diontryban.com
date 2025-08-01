import { allProjects, Project } from "content-collections";
import styles from "./page.module.scss";

const Projects = () => {
  const sortedProjects = allProjects.sort(
    (a, b) => b.dateCreated.getTime() - a.dateCreated.getTime()
  );

  const projectsByYear = sortedProjects.reduce(
    (map, project) => {
      const year = project.dateCreated.getUTCFullYear();

      if (!map[year]) {
        map[year] = [];
      }
      map[year].push(project);

      return map;
    },
    {} as Record<number, Project[]>
  );

  const sortedYears = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);

  return (
    <>
      <h1>Projects</h1>
      {sortedYears.map((year, index) => (
        <div key={year}>
          <ul className={styles["project-list"]}>
            {projectsByYear[year].map((project) => (
              <li key={project.slug} className={styles.project}>
                {project.published ? (
                  <a href={`/projects/${project.slug}`} className={styles.logo}>
                    <img src={`/projects/${project.slug}/logo.png`} alt={`${project.title} logo`} />
                  </a>
                ) : (
                  <div className={styles.logo}>
                    <img src={`/projects/${project.slug}/logo.png`} alt={`${project.title} logo`} />
                  </div>
                )}
                <div className={styles.info}>
                  <h2>
                    {project.published ? (
                      <a href={`/projects/${project.slug}`}>
                        {project.title}
                      </a>
                    ) : (
                        <>{project.title}</>
                    )}
                  </h2>
                  <div className={styles.summary}>
                    {project.summary}
                  </div>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <div key={`${project.slug}#${tag}`} className={styles.tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {index != sortedYears.length - 1 && 
            <div className={styles["year-hr"]} role="separator" aria-orientation="horizontal" aria-label={`${year}`}>
              —{year}—
            </div>
          }
        </div>
      ))}
    </>
  );
};

export default Projects;

