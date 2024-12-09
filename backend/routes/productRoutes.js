import express from 'express'
import * as productController from "../controllers/productController.js"

const router = express.Router()


router.get('/',productController.getAllProducts)
router.post('/add-product',productController.addProduct)
router.get('/:id',productController.getProduct)
router.patch('/:id',productController.updateProduct)

export default router