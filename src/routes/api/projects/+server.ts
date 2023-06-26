import { json } from "@sveltejs/kit";
import { PROJECT_TAGS, type ProjectMetadata } from "$lib/types";

export async function GET() {
    let projects: ProjectMetadata[] = [];

    const paths = import.meta.glob("/src/projects/*.md", { eager: true });

    // Collect all projects from the filesystem.
    for (const path in paths) {
        const file = paths[path];

        if (file && typeof file === "object" && "metadata" in file) {
            if (file.metadata && typeof file.metadata === "object") {
                if ("title" in file.metadata && "description" in file.metadata && "startDate" in file.metadata) {
                    const slug = path.split("/")?.pop()?.replace(".md", "");
                    if (slug) {
                        const metadata = file.metadata as Omit<ProjectMetadata, "slug">;
                        if (!metadata.hidden) {
                            const post = { ...metadata, slug } satisfies ProjectMetadata;

                            // Sort tags alphabetically.
                            if (metadata.tags) {
                                metadata.tags = metadata.tags.sort((a, b) => {
                                    const nameA = (PROJECT_TAGS[a] ?? a).toLowerCase();
                                    const nameB = (PROJECT_TAGS[b] ?? b).toLowerCase();
                                    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
                                });
                            };

                            projects.push(post);
                        }
                    }
                }
            }
        }
    }

    // Sort projects by start date.
    projects = projects.sort((a, b) => {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

    return json(projects);
}
