import type { ProjectMetadata } from "$lib/types";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
    const response = await fetch("/api/projects");
    let projects: ProjectMetadata[] = await response.json();

    const query = decodeURIComponent(url.searchParams.get("q") ?? "");
    const tags = url.searchParams.getAll("t").map((t) => decodeURIComponent(t));

    return { projects, query, tags };
}) satisfies PageLoad;
