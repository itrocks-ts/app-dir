import { existsSync } from 'node:fs'
import { normalize }  from 'node:path'

const appDir = normalize(__dirname + (existsSync(__dirname + '/../../../../node_modules') ? '/../../../..' : '/..'))
export default appDir
