export class ValidateException extends Error {
	public code: number
	public path?: string

	constructor(message: string, code?: number, path?: string) {
		super(message)
		this.code = code ?? 1
		this.path = path
		this.name = 'ValidateException'
		Object.setPrototypeOf(this, ValidateException)
	}
}
