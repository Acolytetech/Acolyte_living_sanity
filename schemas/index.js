import {documentSchemas} from './documents'
import {componentSchemas} from './components'
import {pluginSchemas} from './plugins'

export const schemaTypes = [...documentSchemas, ...componentSchemas, ...pluginSchemas]
