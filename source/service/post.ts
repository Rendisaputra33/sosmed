import { ValidateException } from '../exception/Exceptions'
import PostRequest, { PostUpdateRequest } from '../model/request/PostRequest'
import PostResponse from '../model/response/PostResponse'
import repository from '../respository/post'
import { uploadToFirebase } from './firebase'

export default (env?: string) => ({
	// create new post
	create: async (request: PostRequest, file?: any): Promise<string> => {
		try {
			const publicurl = (await uploadToFirebase(file)) as string
			const response = await repository().save(request, publicurl)
			return response
		} catch (e) {
			console.log(e)
			process.exit(1)
		}
	},
	// get all post
	getAll: async (): Promise<Array<PostResponse>> => {
		try {
			const posts = await repository().allPost()
			return posts
		} catch (e) {
			console.log(e)
			process.exit(1)
		}
	},
	// get post by id
	getById: async (id: string | number): Promise<PostResponse> => {
		try {
			const post = await repository().getSingFilter('post_id', id)
			return post
		} catch (e) {
			throw new ValidateException('post not found')
		}
	},
	// get post by author_id
	getByAuthorId: async (id_author: any): Promise<Array<PostResponse>> => {
		try {
			const posts = await repository().getAllWithFilter('author_id', id_author)
			return posts
		} catch (e) {
			console.error(e)
			process.exit(1)
		}
	},
	// delete singgle post by id
	deleteById: async (id: string | number): Promise<string> => {
		try {
			const response = await repository().deleteByFilter('post_id', id)
			return response
		} catch (e) {
			throw new ValidateException('post not found')
		}
	},
	// delete singgle post by author_id
	deleteByAuthorId: async (id_author: any): Promise<string> => {
		try {
			const response = await repository().deleteByFilter('author_id', id_author)
			return response
		} catch (e) {
			throw new ValidateException('post not found')
		}
	},
	// update post
	update: async (request: PostUpdateRequest, id: string | number): Promise<string> => {
		try {
			const response = await repository().updateText(request, id)
			return response
		} catch (e) {
			throw new ValidateException('post not found')
		}
	},
})
