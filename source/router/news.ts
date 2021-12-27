import { Router } from 'express'

export default (): Router => {
	// routing object
	const route = Router()
	// register router
	route.get('/')
	route.post('/')
	route.put('/:id')
	route.delete('/:id')
	//
	return route
}
