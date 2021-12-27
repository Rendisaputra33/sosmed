import config from '../config/config'
import database from './database/connection'
export { default as Authorize } from './middleware/authorize'

export const configs = config
export const postgre = database().db
export const DataTypes = database().datatypes
