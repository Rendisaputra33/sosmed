import * as Types from '../types'

export default function userReducer(state = {}, action) {
	switch (action.type) {
		case Types.LOGIN_USER:
			return {
				...state,
				user: action.payload,
			}
		case Types.LOGOUT_USER:
			return {
				...state,
				user: action.payload,
			}
		default:
			return state
	}
}
