// core modules
import express from 'express'
import dotenv from 'dotenv'
import origin from 'cors'
import cookie from 'cookie-parser'

// setup env variables
dotenv.config({ path: process.cwd() + '/config/.env.dev' })

// independen modules
import { newsrouting, postrouting, userrouting } from './source/router'
import { Authorize } from './source/bootstrap'

// instance app object
const app = express()

// assign middleware for handling cors origin
app.use(origin({ origin: '*' }))

// assign middleware cookie
app.use(cookie())

// assign middleware request json
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//
app.use(express.static(process.cwd() + '/public/client/public'))

//
app.use(Authorize)

// routing middleware
app.get('/', (req, res) => res.sendFile('index.html'))
app.use('/api/user', userrouting())
app.use('/api/post', postrouting())
app.use('/api/user', newsrouting())
// notfound middleware
app.use((req, res) => res.sendStatus(404))

export default app
