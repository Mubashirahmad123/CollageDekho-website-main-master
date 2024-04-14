import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindApplyConfig from './tailwind.apply.config'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    require('tailwindcss')(tailwindApplyConfig),
    react()
  ],

})
