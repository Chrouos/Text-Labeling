import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import CONFIG from './config';

import { createHtmlPlugin } from 'vite-plugin-html';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.mjs';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    // createHtmlPlugin({
      // inject: {
      //   data: {
      //     title: CONFIG.appName,
      //     metaTitle: CONFIG.metaTags.title,
      //     metaDescription: CONFIG.metaTags.description,
      //     metaImageURL: CONFIG.metaTags.imageURL,
      //   },
      // },
    // }),

  ],

  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },

  define: {
    CONFIG: CONFIG,
  },
});
