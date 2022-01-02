import api from '../../services/api.service'
import * as Types from '../types'

const getPosts = () => async dispatch => {
	try {
		const blogs = await api.get('post')
		dispatch({ type: Types.GET_POSTS, payload: blogs.data.results.posts })
	} catch (error) {
		console.log(error)
	}
}

const getPostBySlug = slug => async dispatch => {
	try {
		const blog = await api.get(`post/${slug}`)
		dispatch({ type: Types.GET_POST, payload: blog.data.results.post })
	} catch (error) {
		console.log(error)	
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPosts, getPostBySlug }
