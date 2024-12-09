import mongoose from 'mongoose'


const productSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true, "Please provide products name"]
  },
  images:{
    type:[String],
    required:[true,"Please provide image"]
  },
  price:{
    type:String,
    required:[true,"Please provide price"]
  },
  category:{
    type:String,
    required:[true,"Prease provide category"]
  },
  created_at:{
    type:Date,
    default:Date.now(),
    select:false
  }
})

const Product  =  mongoose.model("Product",productSchema);
export default Product;