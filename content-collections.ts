import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const ProjectStatus = {
  Archived: "Archived",
  Completed: "Completed",
  InProgress: "In Progress",
  OnHold: "On Hold",
} as const;

const ProjectType = {
  Application: "Application",
  Game: "Game",
  GameJam: "Game Jam",
  McMod: "MC Mod",
  Plugin: "Plugin",
  Website: "Website",
} as const;

const ProjectContext = {
  Internship: "Internship",
  Job: "Job",
  School: "School",
} as const;

const ProjectTools = {
  Blender: "Blender",
  CPlusPlus: "C++",
  CSharp: "C#",
  Electron: "Electron",
  Godot: "Godot",
  Java: "Java",
  Maui: "MAUI",
  MySql: "MySQL",
  NextJS: "Next.js",
  OpenGl: "OpenGL",
  React: "React",
  Rust: "Rust",
  TypeScript: "TypeScript",
  UnrealEngine5: "Unreal Engine 5",
} as const;

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.md",
  schema: z.object({
    context: z.enum(ProjectContext).optional(),
    dateCreated: z.coerce.date(),
    published: z.boolean().optional().default(true),
    slug: z.string(),
    status: z.enum(ProjectStatus),
    summary: z.string(),
    title: z.string(),
    tools: z.enum(ProjectTools).array(),
    type: z.enum(ProjectType),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
      tags: [
        document.status,
        document.type,
        document.context,
        ...document.tools,
      ].filter(v => !!v),
    };
  },
});

export default defineConfig({
  collections: [projects],
});

