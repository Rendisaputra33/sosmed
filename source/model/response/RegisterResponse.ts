export default class RegisterResponse {
	public username: string
	public email: string
	public createdAt: string
	public updatedAt: string

	constructor(username: string, email: string, times: any) {
		this.username = username
		this.email = email
		this.createdAt = times[0]
		this.updatedAt = times[1]
	}
}
