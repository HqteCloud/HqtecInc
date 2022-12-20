import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  integrations: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ],
  vite: {
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js"
      }
    }
  }
});