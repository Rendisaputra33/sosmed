import * as Types from '../types'

export default function postReducer(state = Types.initialStatePost, action) {
	switch (action.type) {
		case Types.GET_POSTS:
			return {
				...state,
				posts: action.payload,
			}
		case Types.GET_POST:
			return {
				...state,
				post: action.payload,
			}
		case Types.ADD_POST:
			return {
				...state,
				posts: state.posts.concat(action.payload),
			}
		case Types.UPDATE_POST:
			return {
				...state,
				post: action.payload,
			}
		case Types.DELETE_POST:
			return {
				...state,
				post: action.payload,
			}
		default:
			return state
	}
}
