import { Server } from 'http'
import { Server as SokcetServer, Socket } from 'socket.io'

export default {
	connect: async (server: Server): Promise<SokcetServer> => {
		// create instance object server socket
		const io = new SokcetServer(server)
		// start event
		io.on('connection', handleConnection(io))
		// return socket object
		return io
	},
}

function handleConnection(io: SokcetServer) {
	return (socket: Socket): void => {
		// console info user
		console.info('new socket :', socket.id)
		// handler disconnect
		io.on('disconnect', handleCloseConnection(socket))
	}
}

function handleCloseConnection(socket: Socket) {
	return (): void => {
		return console.info(`socket dc : ${socket.id}`)
	}
}
