import api from '../../services/api.service'
import * as Types from '../types'

const postLogin = data => async dispatch => {
	try {
		const response = await api.post('user/auth', data)
		localStorage.setItem('accessToken', response.data.token.accessToken)
		dispatch({ type: Types.LOGIN_USER, payload: response.data.token })
	} catch (error) {
		console.log(error)
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export { postLogin }
