import { Model } from 'sequelize'
import { postgre, DataTypes } from '../bootstrap'

interface UserDocument {
	username: string
	user_id?: number
	email: string
	password: string
	token?: string
	createdAt?: string
	updatedAt?: string
}

const User = postgre.define<Model<UserDocument>>(
	'users',
	{
		user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING(60),
			unique: true,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(60),
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
		token: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{ timestamps: true }
)

export default User
