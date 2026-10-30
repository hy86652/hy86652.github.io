import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Every collection is split by language: src/content/<collection>/<lang>/...
// An English entry and its Chinese translation share the same path after the language folder.

const post = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: post,
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: post,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: post.extend({
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    // A date, or free text such as "Present" / "至今"
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/education" }),
  schema: z.object({
    school: z.string(),
    degree: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

// Certifications and awards: one dated item each, with optional details in the body
const honor = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.coerce.date(),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/certifications" }),
  schema: honor,
});

const awards = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/awards" }),
  schema: honor,
});

export const collections = { blog, notes, projects, work, education, certifications, awards };
