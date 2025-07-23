import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    dateStarted: z.coerce.date(),
    published: z.boolean().optional().default(true),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [projects],
});

