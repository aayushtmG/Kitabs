import express from 'express'
import * as productController from "../controllers/productController.js"

const router = express.Router()


router.get('/',productController.getAllProducts)
router.post('/add-product',productController.uploads,productController.addProduct)
router.get('/:id',productController.getProduct)
router.put('/:id',productController.updateProduct)
router.delete('/delete/:id',productController.deleteProduct)

export default router