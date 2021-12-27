import { compareSync, genSalt, hash } from 'bcrypt'

export const verifyPassword = async (pasword: string, encrypted: string) => {
	return compareSync(pasword, encrypted)
}

export const encryptPassword = async (pasword: string) => {
	const salts = await genSalt(12)
	return hash(pasword, salts)
		.then(res => res)
		.catch(err => process.exit(0))
}
