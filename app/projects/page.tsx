import { allProjects, Project } from "content-collections";
import styles from "./page.module.scss";

const Projects = () => {
  const sortedProjects = allProjects.sort(
    (a, b) => b.dateStarted.getTime() - a.dateStarted.getTime()
  );

  const projectsByYear = sortedProjects.reduce(
    (map, project) => {
      const year = project.dateStarted.getUTCFullYear();

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
                    <a href={`/projects/${project.slug}`}>
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

