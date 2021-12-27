export default {
	host: process.env.HOST,
	port: process.env.PORT,
	dbport: Number(process.env.PORT_PSQL),
	database: process.env.DATABASE,
	username: process.env.USERNAME,
	password: process.env.PASSWORD,
	firebase: {
		apiKey: process.env.API_KEY_FIREBASE,
		authDomain: process.env.AUTH_DOMAIN_FIREBASE,
		projectId: process.env.PROJECT_ID_FIREBASE,
		storageBucket: process.env.STORAGE_BUCKET_FIREBASE,
		messagingSenderId: process.env.MESSAGING_SENDER_ID_FIREBASE,
		appId: process.env.APP_ID_FIREBASE,
		measurementId: process.env.MEASUREMENT_ID_FIREBASE,
	},
}
