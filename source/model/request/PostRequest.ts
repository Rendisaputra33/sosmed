export default class PostRequest {
	public title: string
	public descryption: string
	public author_id?: number
	public poster?: string

	constructor(title: string, descryption: string, author_id?: number, url?: string) {
		this.title = title
		this.descryption = descryption
		this.author_id = author_id
		this.poster = url
	}
}

export class PostUpdateRequest {
	public post_id?: number
	public title?: string
	public descryption?: string

	constructor(post_id?: number, title?: string, descryption?: string) {
		this.post_id = post_id
		this.title = title
		this.descryption = descryption
	}
}
