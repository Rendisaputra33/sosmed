import { Router } from 'express'
import controller from '../controller/post'
import securerecource from '../middleware/securerecource'
import fileupload from '../middleware/upload_file'

export default (): Router => {
	// routing object
	const route = Router()
	// register router
	route.get('/', controller().getPosts)
	route.post('/', fileupload().single('file'), controller().addPost)
	route.get('/:id', controller().getPostId)
	route.get('/:id/author', controller().getPostByAuthorId)
	route.delete('/:id/author', securerecource, controller().deletePostByAuthorId)
	route.put('/:id', securerecource, controller().updatePost)
	route.delete('/:id', securerecource, controller().deletePost)
	//
	return route
}
