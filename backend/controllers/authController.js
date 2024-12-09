import catchAsync from "../utils/CatchAsync.js";
import User from '../models/userModel.js'

export const signIn = catchAsync(async (req,res,next)=>{
  const {username,password} = req.body;

  const user = await  User.findOne({username,password});

  if(!user){
   return next( new Error('Couldnt find the user'));
  }

  res.status(200).json({
    message:'success',
    loggedUser:user
  })
});


export const  signUp = catchAsync(async (req,res)=>{
  const newUser = await User.create({
    fullName: req.body.fullName,
    username: req.body.username,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  }) 

  res.status(201).json({
    message:'success',
    newUser
  })

});

export const updatePassword = catchAsync(async (req,res,next)=>{
  const _id = req.params.id

  const user = await User.findById(_id).select('+password +confirmPassword');
  if(!user){
    return next(new Error('Cannot find user'))
  }

  if(req.body.currentPassword !== user.password){
    return next(new Error('Previous password does\'nt match'))
  }
  if(req.body.newPassword !== req.body.newConfirmPassword){
    return next(new Error('Please confirm your password'))
  }
  user.password = req.body.newPassword 
  user.passwordConfirm = req.body.newConfirmPassword 

  await user.save()
  res.status(200).json({
    message:'password updated',
  })

});