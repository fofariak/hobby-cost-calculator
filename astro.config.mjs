import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // This line is required

// https://astro.build/config
export default defineConfig({
  // This line activates the Tailwind integration
  integrations: [tailwind()]
});
