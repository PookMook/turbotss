import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { nitro } from 'nitro/vite'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    plugins: [
      // this is the plugin that enables path aliases
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      ...(isBuild ? [nitro({ config: { preset: 'vercel' } })] : []),
      tanstackStart(),
      viteReact(),
    ],
  }
})
