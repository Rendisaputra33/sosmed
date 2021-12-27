import { PostDocument } from '../Post'

export default class PostResponse {
	public id: number
	public title: string
	public descryption: string
	public author: number
	public created: string
	public poster?: string
	public updated: string

	constructor(data: PostDocument) {
		this.id = data.post_id ?? 0
		this.title = data.title
		this.descryption = data.descryption
		this.author = data.author_id ?? 0
		this.poster = data.poster
		this.created = data.createdAt ?? ''
		this.updated = data.updatedAt ?? ''
	}
}
