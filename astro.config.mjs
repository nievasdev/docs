// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs-example.vercel.app',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
    assets: '_assets'
  },
  compressHTML: true
});
