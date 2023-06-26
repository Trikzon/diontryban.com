import type { ProjectMetadata } from "$lib/types";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
    const response = await fetch("/api/projects");
    let projects: ProjectMetadata[] = await response.json();

    const query = decodeURIComponent(url.searchParams.get("q") ?? "");

    return { projects, query };
}) satisfies PageLoad;
