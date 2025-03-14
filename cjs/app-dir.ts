import { existsSync } from 'node:fs'
import { normalize }  from 'node:path'

export const appDir = normalize(__dirname + (existsSync(__dirname + '/../../../../node_modules') ? '/../../../..' : '/..'))
