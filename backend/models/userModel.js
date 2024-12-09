import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:[true,"Please provide full name"]
  },
  username:{
    type:String,
    required:[true,"Please provide username"],
    unique:true
  },
  password:{
    type:String,
    required:[true,"Please provide password"]
  },
  passwordConfirm:{
    type:String,
    required:[true,"Please confirm your password"],
    validate:{
      validator: function(el){
        return el == this.password;
      },
      message:"Confirm password is not same"
    }
  }
})

const User = mongoose.model('User',userSchema); 
export default User;