import express from 'express'
import { config as dotenvConfig } from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
// Use .env
dotenvConfig()


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: `http://localhost:${process.env.FRONTEND_PORT}`,
  credentials: true
}))

app.listen(process.env.BACKEND_PORT, () => {
  console.info('Server listening on port ' + process.env.BACKEND_PORT)
  console.log("hello world!")
})