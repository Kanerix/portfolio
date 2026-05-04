import adapter from "@sveltejs/adapter-static";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), enhancedImages()],
  kit: {
    adapter: adapter(),
    paths: {
      base: process.argv.includes("dev") ? "" : "/portfolio",
    },
  },
  extensions: [".svelte", ".svx"],
};

export default config;
