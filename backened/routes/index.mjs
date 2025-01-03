import express from 'express'
import otp from './otp.mjs'

const router = express.Router()

router.use('/otp' , otp)

export default router