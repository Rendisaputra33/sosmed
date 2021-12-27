import { Router } from 'express'
import controller from '../controller/user'

export default (): Router => {
	// routing object
	const route = Router()
	// register router
	route.get('/', controller('dev').auth)
	route.post('/auth', controller('dev').login)
	route.post('/', controller('dev').register)
	route.put('/:id', controller('dev').login)
	route.delete('/:id', controller('dev').register)
	//
	return route
}
