import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const movies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/movies' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ru']).default('en'),
    translationKey: z.string().optional(),
    year: z.number(),
    rating: z.number().min(0).max(10).optional(),
    genres: z.array(z.string()).optional(),
    cover: z.string().optional(),
    favorite: z.boolean().optional().default(false),
    dateWatched: z.string().optional(),
    description: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ru']).default('en'),
    translationKey: z.string().optional(),
    author: z.string(),
    year: z.number().optional(),
    rating: z.number().min(0).max(10).optional(),
    genres: z.array(z.string()).optional(),
    cover: z.string().optional(),
    favorite: z.boolean().optional().default(false),
    dateRead: z.string().optional(),
    description: z.string().optional(),
  }),
});

const places = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/places' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ru']).default('en'),
    translationKey: z.string().optional(),
    country: z.string(),
    city: z.string().optional(),
    coordinates: z.tuple([z.number(), z.number()]).optional(),
    visitedAt: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'ru']).default('en'),
    translationKey: z.string().optional(),
    year: z.number().optional(),
    status: z.enum(['idea', 'in-progress', 'live', 'paused', 'archived']).optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    url: z.string().optional(),
    github: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  movies,
  books,
  places,
  projects,
};
