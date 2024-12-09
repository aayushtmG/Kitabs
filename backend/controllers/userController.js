import User from '../models/userModel.js'
import catchAsync from '../utils/CatchAsync.js'


export const getAllUsers = catchAsync(async (req,res)=>{
  const userList = await User.find();
  res.status(200).json({
    userList
  })
})

export const updateUser = catchAsync(async (req,res,next)=>{
  if(req.body.password || req.body.passwordConfirm){
    return next(new Error('You cannot update password here'));
  }
  const id = req.params.id
  const user =  await User.findByIdAndUpdate({_id:id},req.body,{
    new:true
  });
  if(!user){
    return next(new Error('Update failed'))
  }
  res.status(200).json({
    message:'success',
    updated:user
  })
})



export const deleteUser = catchAsync(async (req,res,next)=>{

  const user = await User.findById(req.params.id).select('+password')
  if(user.password !== req.body.password){
    return next(new Error('Cant delete without password'))
  }

  await user.deleteOne()

   res.status(204).json(
    {
      message:'successfully deleted'
    }
   )
});