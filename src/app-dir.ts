import { existsSync } from 'node:fs'
import { dirname, normalize }  from 'node:path'
import { fileURLToPath } from 'node:url'

// @ts-ignore CommonJS/ESModule compatibility
const dirName = import.meta ? dirname(fileURLToPath(import.meta.url)) : __dirname

const appDir = normalize(dirName + (existsSync(dirName + '/../../../node_modules') ? '/../../..' : '/..'))
export default appDir
