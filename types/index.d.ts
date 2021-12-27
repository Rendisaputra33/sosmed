import { Express, NextFunction, Request, Response, Express } from 'express'

declare global {
	namespace Express {
		interface Request {
			user?: any
			isAuth?: Function
		}
	}
}

export type Req<P = any, B = any, Q = any> = Request<P, any, B, Q>
export type Res = Response
export type Next = NextFunction
