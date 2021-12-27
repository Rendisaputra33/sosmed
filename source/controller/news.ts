import { Req, Res } from '../../types'
import LoginRequest from '../model/request/LoginRequest'
import service from '../service/user'

interface UserController {
	login: (request: Req, response: Res) => Promise<void | Res>
	register: (request: Req, response: Res) => Promise<void | Res>
	auth: (request: Req, response: Res) => Promise<void | Res>
}

export default (env?: string): UserController => ({
	// user login controller
	login: async (req: Req, res: Res): Promise<Res> => {
		try {
			const userloginRequest = new LoginRequest(req.body.username, req.body.password)
			const token = await service().verifyLogin(userloginRequest)
			return res.status(200).json({ error: false, token })
		} catch (e: unknown) {
			return res.status(200).json({ error: true, message: (e as any).message })
		}
	},
	// user register controller
	register: async (req: Req, res: Res): Promise<Res> => {
		try {
			return res.status(200).json({})
		} catch (e: unknown) {
			return res.status(200).json({})
		}
	},
	// index controller for user
	auth: async (req: Req, res: Res): Promise<Res> => {
		try {
			return res.status(200).json({ error: false, code: 200, auth: req?.user })
		} catch (e: unknown) {
			return res.status(200).json({ error: true, code: 401, auth: null })
		}
	},
})
