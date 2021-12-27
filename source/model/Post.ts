import { Model } from 'sequelize'
import { postgre, DataTypes } from '../bootstrap'

export interface PostDocument {
	title: string
	post_id?: number
	author_id?: number
	descryption: string
	poster?: string
	createdAt?: string
	updatedAt?: string
}

const Post = postgre.define<Model<PostDocument>>(
	'posts',
	{
		post_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		author_id: {
			type: DataTypes.INTEGER,
		},
		title: {
			type: DataTypes.TEXT,
		},
		descryption: {
			type: DataTypes.TEXT,
		},
		poster: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
	},
	{ timestamps: true }
)

export default Post
