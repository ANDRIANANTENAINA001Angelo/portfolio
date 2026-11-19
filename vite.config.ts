import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type {} from 'vite-ssg' // adds `ssgOptions` to Vite's config type
import { fileURLToPath, URL } from 'node:url'
import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { allPages } from './src/i18n'
import { llmsTxt, robotsTxt, sitemapXml } from './src/seo/static-files'

const outDir = fileURLToPath(new URL('./dist', import.meta.url))

async function listHtml(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map(e => (e.isDirectory() ? listHtml(join(dir, e.name)) : Promise.resolve([join(dir, e.name)])))
  )
  return nested.flat().filter(f => f.endsWith('.html'))
}

/**
 * vite-ssg writes flat files (services.html). Also write services/index.html so the page
 * is served at the clean URL whether the host resolves "x.html" or "x/index.html".
 */
async function addDirectoryIndexes() {
  for (const file of await listHtml(outDir)) {
    const rel = relative(outDir, file)
    if (rel.endsWith('index.html')) continue
    const target = join(outDir, rel.replace(/\.html$/, ''), 'index.html')
    await mkdir(dirname(target), { recursive: true })
    await copyFile(file, target)
  }
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'flat',
    // Every page in both languages, generated from the services and projects data
    // (rendered without the trailing slash; addDirectoryIndexes() then serves them at "/x/")
    includedRoutes: () =>
      allPages().flatMap(p => [p.paths.fr, p.paths.en]).map(path => (path === '/' ? path : path.replace(/\/$/, ''))),
    async onFinished() {
      await writeFile(join(outDir, 'sitemap.xml'), sitemapXml())
      await writeFile(join(outDir, 'robots.txt'), robotsTxt())
      await writeFile(join(outDir, 'llms.txt'), llmsTxt())
      await addDirectoryIndexes()
    }
  }
})
