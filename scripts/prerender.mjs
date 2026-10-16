import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

import { pages, SITE } from './seo-pages.mjs'

const esc = (v) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

// Rewrite the homepage head tags so each route has its own title, description and canonical.
function withMeta(html, page) {
  if (!page.title) return html
  const url = SITE + page.path
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(page.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(page.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(page.description)}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(page.title)}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(page.description)}"`)
}

for (const page of pages) {
  const appHtml = render(page.path)
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  html = withMeta(html, page)
  if (page.path === '/') {
    writeFileSync(resolve(root, 'dist/index.html'), html)
  } else {
    const dir = resolve(root, 'dist' + page.path)
    mkdirSync(dir, { recursive: true })
    writeFileSync(resolve(dir, 'index.html'), html)
  }
}

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Pre-rendering complete.')
