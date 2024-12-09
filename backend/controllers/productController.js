import Product from "../models/productModel.js"
import catchAsync from "../utils/CatchAsync.js";

export const getAllProducts = catchAsync(async (req,res)=>{
  const products = await Product.find();

  res.status(200).json({
    message:'success',
    products
  })
})

export const getProduct = catchAsync(async (req,res)=>{
  const productId = req.params.id
  const product = await Product.findById(productId,'-_id')

  res.status(200).json({
   message:'success',
   product
  })
})

export const addProduct = catchAsync(async(req,res)=>{
  const newProduct = await Product.create({
    title: req.body.title,
    price: req.body.price,
    category: req.body.category,
    images: req.body.images.map(imageName => `${req.protocol}://${req.get('host')}/uploads/${imageName}`)
  })
  res.status(201).json({
    message:'success',
    newProduct
  })
})

export const updateProduct = catchAsync(async(req,res)=>{
  const id = req.params.id
  const updateData = req.body
  const updatedProduct = await Product.findByIdAndUpdate(id,
    updateData,{
      new:true //returns the updated document otherwise will return not old one
    }
  )
  res.status(201).json({
    message:'success',
    updatedProduct 
  })
})


export const deleteProduct = catchAsync(async (req,res,next)=>{
  const userLoggedIn = true
  const product = await Product.findById(req.params.id)
  if(!userLoggedIn){
    return next(new Error('Cant delete without password'));
  }

   res.status(204).json({message:'successfully deleted'})
});