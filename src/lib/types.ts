export type ProjectMetadata = {
    slug: string;
    title: string;
    description: string;
    logo: string | undefined;
    startDate: string;
    endDate: string | undefined;
    tags: string[];
    github: string | undefined;
    mcmod: MCModMetadata | undefined;
};

export type MCModMetadata = {
    modrinthSlug: string;
    curseForgeId: string;
};
