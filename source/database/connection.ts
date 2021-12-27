import { DataTypes, Sequelize } from 'sequelize'
import { configs } from '../bootstrap'

export default () => {
	return {
		db: new Sequelize({
			username: configs.username,
			port: configs.dbport,
			host: configs.host,
			password: configs.password,
			database: configs.database,
			dialect: 'postgres',
			pool: { min: 20, max: 90 },
			logging: false,
		}),
		datatypes: DataTypes,
	}
}
