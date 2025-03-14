import { existsSync }         from 'node:fs'
import { dirname, normalize } from 'node:path'
import { fileURLToPath }      from 'node:url'

const dirName = dirname(fileURLToPath(import.meta.url))
export const appDir = normalize(dirName + (existsSync(dirName + '/../../../../node_modules') ? '/../../../..' : '/..'))
