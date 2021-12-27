import jwt from 'jsonwebtoken'

export function decode(token: string) {
	try {
		return { decode: jwt.verify(token, 'secret_key'), expired: false }
	} catch (error) {
		return { decode: null, expired: true }
	}
}

export function generate(payload: any, expired: string) {
	try {
		return jwt.sign(payload, 'secret_key', { expiresIn: expired })
	} catch (error) {
		process.exit(-1)
	}
}
