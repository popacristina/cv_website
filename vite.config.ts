import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// `base` must match the GitHub Pages path:
//  - Project site (popacristina.github.io/cv_website) -> '/cv_website/'
//  - User site    (popacristina.github.io)            -> '/'
export default defineConfig({
  base: '/cv_website/',
  plugins: [vue()],
})
