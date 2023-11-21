import type { ProjectMetadata } from '$lib/types.js';

export async function load({ fetch }) {
    const response = await fetch("/api/projects");
    let projects: ProjectMetadata[] = await response.json();
    projects = projects.filter((project) => project.featured );
    return { projects };
}
