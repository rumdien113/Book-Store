import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/', (req: Request, res: Response) => {
	return res.status(200).send({
		response: 'Welcome to Book Store'
	})
})

app.listen(process.env.PORT, () => {
	console.log(`${process.env.NAME} running on port ${process.env.PORT}`)
})
