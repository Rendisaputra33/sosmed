import http from 'http'
import app from './app'
import socket from './socket'
import { configs, postgre } from './source/bootstrap'
import User from './source/model/User'

const server = http.createServer(app)
const port = configs.port || 8000

// run server
;(async function (): Promise<void> {
	// start server
	server.listen(port, () => console.info(`server run on ${port}`))
	//
	postgre.authenticate().then(async res => {
		console.log('connected to database')
		await postgre.sync({ force: false })
	})
	// connect to socket
	await socket.connect(server)
})()
