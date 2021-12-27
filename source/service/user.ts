import { ValidateException } from '../exception/Exceptions'
import LoginRequest from '../model/request/LoginRequest'
import ResgisterRequest from '../model/request/RegisterRequest'
import LoginResponse from '../model/response/LoginResponse'
import RegisterResponse from '../model/response/RegisterResponse'
import { generate } from '../util/token'
import repository from '../respository/user'

interface UserService {
	verifyLogin: ({ username, password }: LoginRequest) => Promise<LoginResponse>
	registerUser: (data: ResgisterRequest) => Promise<RegisterResponse>
}

export default (): UserService => ({
	//
	verifyLogin: async (loginRequest: LoginRequest): Promise<LoginResponse> => {
		try {
			const user = await repository().findOneAndCreateToken(loginRequest)
			return new LoginResponse(generate(user, '1h'))
		} catch (error) {
			if ((error as Error).name == 'ValidateException')
				throw new ValidateException(
					(error as ValidateException).message,
					(error as ValidateException).code
				)
			process.exit(1)
		}
	},

	registerUser: async (registerRequest: ResgisterRequest): Promise<RegisterResponse> => {
		try {
			const user = await repository().findOneAndCreate(registerRequest)
			return new RegisterResponse(user.username, user.email, [user.createdAt, user.updatedAt])
		} catch (error) {
			if (error instanceof ValidateException) throw new ValidateException(error.message, error.code)
			process.exit(1)
		}
	},
})
