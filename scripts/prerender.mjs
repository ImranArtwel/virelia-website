import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')
const appHtml = render()
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
writeFileSync(resolve(root, 'dist/index.html'), html)
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log('Pre-rendering complete.')
