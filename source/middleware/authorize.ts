import { Next, Req, Res } from '../../types'
import User from '../model/User'
import { decode, generate } from '../util/token'
import jwt from 'jsonwebtoken'

async function checkTokenValidOrNot(token: string) {
	const user = jwt.decode(token) as any
	const data = (
		await User.findOne({
			where: { user_id: user?.user_id },
			attributes: ['user_id', 'username', 'email', 'createdAt'],
		})
	)?.get()
	if (data?.token === token) {
		const newToken = generate(data, '1h')
		await User.update({ token: newToken }, { where: { user_id: user?.user_id } })
		return { token: generate(data, '1h'), data: data }
	}
	return null
}

export default async (request: Req, response: Res, next: Next) => {
	try {
		const token = request.headers['authorization']?.replace(/^Bearer\s/, '') ?? ''

		if (!token || token == '') return next()

		const { decode: decoded, expired } = decode(token)

		if (expired) {
			const checkToken = await checkTokenValidOrNot(token)
			if (checkToken) {
				response.cookie('x-auth', checkToken.token)
				request.user = checkToken.data
			}
			return next()
		}

		request.user = decoded
		return next()
	} catch (e: unknown) {}
}
