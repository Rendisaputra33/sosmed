import { encryptPassword, verifyPassword } from '../util/password'
import { ValidateException } from '../exception/Exceptions'
import LoginRequest from '../model/request/LoginRequest'
import ResgisterRequest from '../model/request/RegisterRequest'
import User from '../model/User'
import { Op } from 'sequelize'

export default () => ({
	//
	findOneAndVerify: async (data: LoginRequest) => {
		const user = (await User.findOne({ where: { username: data.username } }))?.get()
		if (!user) throw new ValidateException('username or password wrong!')
		const ver = await verifyPassword(data.password, user.password)
		if (!ver) throw new ValidateException('username or password wrong!')
		return user
	},
	//
	updateToken: async (token: string, id: number | undefined) => {
		await User.update({ token: token }, { where: { user_id: id } })
		return true
	},
	//
	findOneAndCreate: async (data: ResgisterRequest) => {
		try {
			const user = (
				await User.findOne({
					where: { [Op.or]: [{ username: data.username, email: data.email }] },
				})
			)?.get()
			//
			if (user) throw new ValidateException('username or email already exist!')
			//
			const newUser = (
				await User.create({
					username: data.username,
					email: data.email,
					password: await encryptPassword(data.password),
				})
			).get()

			return newUser
		} catch (e) {
			console.log(`Error:`, e)
			process.exit(-1)
		}
	},
})
