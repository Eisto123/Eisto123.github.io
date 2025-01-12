import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  site: 'https://Eisto123.github.io',
  integrations: [tailwind()],

});
