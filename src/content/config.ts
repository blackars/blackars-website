import { defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  type: 'content',
  schema: rssSchema,
});

const work = defineCollection({
  type: 'content',
  schema: rssSchema,
});

const project = defineCollection({
  type: 'content',
  schema: rssSchema,
});

export const collections = { 
  
  'blog': blog,
  'work': work,
  'project': project,
};