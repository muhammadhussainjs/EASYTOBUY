import express from 'express'
import cors from 'cors'
import db from './config/db.mjs'

const app = express()

app.use(cors());

app.use(express.json())

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

