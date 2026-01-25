import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://blackars.com",
  integrations: [
    icon(),
    sitemap({
      customPages: ['https://blackars.com/'],
      filter: (page) => {
    // Explicitly exclude common non-page routes
    const exclude = [
      '/admin/',
      '/api/',
      '/404',
      '/500',
      '/_image',
      '/_astro/'
    ];
    return !exclude.some(path => page.includes(path));
  },
  // Add explicit entry points for your pages
  entryPoints: [
    '/',
    '/projects/',
    // Add other main routes here
  ]
}),
    robotsTxt({
      sitemap: [
        "https://blackars.com/sitemap-index.xml",
        "https://blackars.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
  experimental: {
  contentCollectionCache: true,
}
});
