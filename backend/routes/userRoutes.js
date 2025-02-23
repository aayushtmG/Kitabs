import express from 'express'
import * as userController from '../controllers/userController.js'
import * as authController from '../controllers/authController.js'

const router = express.Router();

router.get('/',userController.getAllUsers);
router.post('/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);

router.post('/signin',authController.signIn)
router.post('/create-user',authController.signUp);


export default router