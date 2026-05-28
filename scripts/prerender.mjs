import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

function renderPage(url, outputPath) {
  const appHtml = render(url)
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  writeFileSync(outputPath, html)
}

renderPage('/', resolve(root, 'dist/index.html'))

mkdirSync(resolve(root, 'dist/terms'), { recursive: true })
renderPage('/terms', resolve(root, 'dist/terms/index.html'))

mkdirSync(resolve(root, 'dist/privacy'), { recursive: true })
renderPage('/privacy', resolve(root, 'dist/privacy/index.html'))

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Pre-rendering complete.')
