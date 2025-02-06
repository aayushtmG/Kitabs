import Product from "../models/productModel.js"
import catchAsync from "../utils/CatchAsync.js";
import path from 'path'
import multer from 'multer'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, path.join(__dirname ,'../public/images/products'))
  },filename: function(req,file,cb){
    const prefix = Date.now() + '-' + Math.round(Math.random()) * 1E9; 
    cb(null, `${prefix}-${file.originalname}`)
  }
})
const upload = multer({storage})

export const uploads = upload.array('images',6)

export const getAllProducts = catchAsync(async (req,res)=>{
  const {category} = req.query
  if(category == 'all' || !category ){
  const products = await Product.find();
  res.status(200).json({
    message:'success',
    products
  })
}else{
    const products = await Product.find({category})
   res.status(200).json({
    message:'success',
    category,
    products
  })
}
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
    images: req.files.map(image => `/uploads/products/${image.filename}`)
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
      new:true //returns the updated document otherwise will return old one
    }
  )

  res.status(201).json({
    message:'success',
    updatedProduct 
  })
})


export const deleteProduct = catchAsync(async (req,res,next)=>{
  const userLoggedIn = true
  if(!userLoggedIn){
    return next(new Error('Cant delete without password'));
  }
  await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({message:'successfully deleted'})
});