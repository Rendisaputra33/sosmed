import { ValidateException } from '../exception/Exceptions'
import Post, { PostDocument } from '../model/Post'
import PostRequest, { PostUpdateRequest } from '../model/request/PostRequest'
import PostResponse from '../model/response/PostResponse'

export default function () {
	return {
		// object function for get all post
		getAllWithFilter: async (filter: keyof PostDocument, value: any): Promise<PostResponse[]> => {
			const posts = (await Post.findAll({ where: { [filter]: value } }))?.map(
				p => new PostResponse(p.get())
			)
			return posts
		},
		//
		getSingFilter: async (filter: keyof PostDocument, value: any): Promise<PostResponse> => {
			const post = (await Post.findOne({ where: { [filter]: value } }))?.get()
			if (post) return new PostResponse(post)
			throw new ValidateException('post not found')
		},
		//
		save: async (request: PostRequest, poster?: string): Promise<string> => {
			await Post.create({
				title: request.title,
				descryption: request.descryption,
				author_id: request.author_id,
				poster: poster ?? '',
			})
			return 'successfully created post'
		},
		//
		allPost: async (): Promise<Array<PostResponse>> => {
			const posts = (await Post.findAll()).map(p => new PostResponse(p.get()))
			return posts
		},
		//
		deleteByFilter: async (filter: keyof PostDocument, value: any): Promise<string> => {
			await Post.destroy({ where: { [filter]: value } })
			return 'successfully deleted post'
		},
		// update post
		updateText: async (request: PostUpdateRequest, post_id: number | string): Promise<string> => {
			await Post.update(
				{
					title: request.title,
					descryption: request.descryption,
				},
				{ where: { post_id: post_id } }
			)
			return 'successfully updated post'
		},
	}
}
