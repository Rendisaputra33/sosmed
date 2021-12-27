import multer from 'multer'

export default (): multer.Multer => {
	return multer({
		storage: multer.memoryStorage(),
	})
}
