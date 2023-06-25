import type { ProjectMetadata } from '$lib/types.js';

export async function load({ fetch }) {
    const response = await fetch("/api/projects");
    let projects: ProjectMetadata[] = await response.json();
    projects = projects.slice(0, 3);
    return { projects };
}
