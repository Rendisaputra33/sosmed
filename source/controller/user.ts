import LoginRequest from '../model/request/LoginRequest'
import service from '../service/user'
import { Req, Res } from '../../types'
import { configs } from '../bootstrap'
import ResgisterRequest from '../model/request/RegisterRequest'

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
	register: async (req: Req<any, ResgisterRequest>, res: Res): Promise<Res> => {
		try {
			const { email, username, password } = req.body
			const userRegisterRequest = new ResgisterRequest(username, password, email)
			const register = await service().registerUser(userRegisterRequest)
			return res.status(200).json({ error: false, data: register })
		} catch (e: unknown) {
			return res.status(200).json({ error: true, message: (e as Error).message, data: null })
		}
	},
	// index controller for user
	auth: async (req: Req, res: Res): Promise<Res> => {
		try {
			return res.status(200).json({
				port: configs.port,
			})
		} catch (e: unknown) {
			return res.status(200).json({})
		}
	},
})
