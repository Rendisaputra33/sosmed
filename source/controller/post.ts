import { Req, Res } from '../../types'
import PostRequest, { PostUpdateRequest } from '../model/request/PostRequest'
import service from '../service/post'

export default (env?: string) => ({
	// object function for get all post
	getPosts: async (request: Req, response: Res): Promise<Res> => {
		try {
			const posts = await service().getAll()
			return response.status(200).json({ error: false, results: { posts } })
		} catch (e: unknown) {
			return response.status(200).json({ error: true, results: null })
		}
	},
	//
	getPostId: async (request: Req<{ id: number }>, response: Res): Promise<Res> => {
		try {
			const post = await service().getById(request.params.id)
			return response.status(200).json({ error: false, results: { post } })
		} catch (e: unknown) {
			return response.status(200).json({ error: true, results: null })
		}
	},
	//
	addPost: async (request: Req<any, PostRequest>, response: Res): Promise<Res> => {
		try {
			const { title, descryption, author_id } = request.body
			const status = await service().create(
				new PostRequest(title, descryption, author_id),
				request.file
			)
			return response.status(200).json({ error: false, results: status })
		} catch (e: unknown) {
			return response.status(200).json({ error: true, results: null })
		}
	},
	//
	deletePost: async (request: Req<{ id: number }>, response: Res): Promise<Res> => {
		try {
			const result = await service().deleteById(request.params.id)
			return response.status(200).json({ error: false, result })
		} catch (e: unknown) {
			return response.status(200).json({ error: true, results: null })
		}
	},
	//
	deletePostByAuthorId: async (request: Req<{ id: number }>, response: Res): Promise<Res> => {
		try {
			const result = await service().deleteByAuthorId(request.params.id)
			return response.status(200).json({ error: false, result })
		} catch (e: unknown) {
			return response.status(200).json({ error: true, results: null })
		}
	},
	// object function for get all post by author_id
	getPostByAuthorId: async (request: Req<{ id: number }>, response: Res): Promise<Res> => {
		try {
			const posts = await service().getByAuthorId(request.params.id)
			return response.status(200).json({ error: false, results: { posts } })
		} catch (e: unknown) {
			return response.status(200).json({ error: true, results: null })
		}
	},
	// update post by id
	updatePost: async (
		request: Req<{ id: number }, PostUpdateRequest>,
		response: Res
	): Promise<Res> => {
		try {
			const { title, descryption } = request.body
			const updateRequestPost = new PostUpdateRequest(request.params.id, title, descryption)
			await service().update(updateRequestPost, request.params.id)
			return response.status(200).json({ error: false, results: 'success updating post' })
		} catch (e: unknown) {
			return response.status(200).json({ error: true, results: null })
		}
	},
})
