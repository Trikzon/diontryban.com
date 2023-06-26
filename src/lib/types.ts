export type ProjectMetadata = {
    slug: string;
    title: string;
    description: string;
    logo?: string;
    startDate: string;
    endDate?: string;
    tags?: string[];
    github?: string;
    mcmod?: {
        modrinthSlug: string;
        curseForgeId: string;
    };
};

export const PROJECT_TAGS: { [tag: string]: string } = {
    "java": "Java",
    "minecraft-mod": "Minecraft Mod",
    "sveltekit": "SvelteKit",
    "typescript": "TypeScript",
    "website": "Website",
};
