import express from 'express'
import * as authController from '../controllers/authController.js'

const router = express.Router();

router.post('/signin',authController.signIn)
router.post('/create-user',authController.signUp);


export default router