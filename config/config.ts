export default {
	host: process.env.HOST,
	port: process.env.PORT,
	dbport: Number(process.env.PORT_PSQL),
	database: process.env.DATABASE,
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	firebase: {
		apiKey: 'AIzaSyC4l8HwvSJ-hf0c-22xtfyHD9_Cuw7PXZg',
		authDomain: 'sosmed-api-5b0eb.firebaseapp.com',
		projectId: 'sosmed-api-5b0eb',
		storageBucket: 'sosmed-api-5b0eb.appspot.com',
		messagingSenderId: '114181051323',
		appId: '1:114181051323:web:48207b592bef51a62dea9e',
		measurementId: 'G-1JDMPR3GJ6',
	},
}
