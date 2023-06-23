import { json } from "@sveltejs/kit";
import type { ProjectMetadata } from "$lib/types";

export async function GET() {
    let projects: ProjectMetadata[] = [];

    const paths = import.meta.glob("/src/projects/*.md", { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/")?.pop()?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata as Omit<ProjectMetadata, "slug">;
            const post = { ...metadata, slug } satisfies ProjectMetadata;
            projects.push(post);
        }
    }

    projects = projects.sort((a, b) => {
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });

    return json(projects);
}
