import { existsSync } from 'node:fs'
import { dirname, normalize }  from 'node:path'
import { fileURLToPath } from 'node:url'

// @ts-ignore Compatibility code
__filename ??= fileURLToPath(import.meta.url)
__dirname  ??= dirname(__filename)

const appDir = normalize(__dirname + (existsSync(__dirname + '/../../../node_modules') ? '/../../..' : '/..'))
export default appDir
