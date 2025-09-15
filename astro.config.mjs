import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify"; // This will be added

// https://astro.build/config
export default defineConfig({
  // This property is added to enable server-side rendering
  output: 'server',
  
  // Your integrations array is updated to include netlify()
  integrations: [tailwind(), netlify()]
});
