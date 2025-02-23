import express from 'express'
import * as productController from "../controllers/productController.js"

const router = express.Router()


router.get('/',productController.getAllProducts)
router.get('/featured-products',productController.getFeaturedProducts)
router.get('/new-products',productController.getNewProducts)
router.post('/add-product',productController.uploads,productController.addProduct)
router.get('/:id',productController.getProduct)
router.put('/:id',productController.updateProduct)
router.delete('/delete/:id',productController.deleteProduct)

export default router