export type ProjectMetadata = {
    slug: string;
    hidden: boolean;
    featured: boolean;
    title: string;
    description: string;
    logo?: string;
    promoImage?: string;
    startDate: string;
    endDate?: string;
    tags?: string[];
    type?: string;
    article?: string;
    demo?: string;
    source?: string;
};

export const PROJECT_TAGS: { [tag: string]: string } = {
    "game": "Game",
    "game-jam": "Game Jam",
    "gdscript": "GDScript",
    "godot": "Godot",
    "java": "Java",
    "mdsvex": "mdsvex",
    "minecraft-mod": "Minecraft Mod",
    "obsidian-plugin": "Obsidian Plugin",
    "python": "Python",
    "sveltekit": "SvelteKit",
    "typescript": "TypeScript",
    "website": "Website",
};
