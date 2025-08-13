import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import tailwind from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwind()]
})