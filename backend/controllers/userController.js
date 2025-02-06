import User from '../models/userModel.js';
import catchAsync from '../utils/CatchAsync.js';
import bcrypt from 'bcryptjs';
import AppError from '../utils/AppError.js'; 

// Get all users
export const getAllUsers = catchAsync(async (req, res) => {
  const userList = await User.find();
  res.status(200).json({
    status: 'success',
    userList,
  });
});

// Update a user
export const updateUser = catchAsync(async (req, res, next) => {
  // Prevent password updates here
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('You cannot update the password here. Use /updatePassword route.', 400));
  }

  const id = req.params.id;

  // Find and update the user
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true, // Return the updated document
    runValidators: true, // Ensure validation rules are applied
  });

  if (!user) {
    return next(new AppError('No user found with this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    updatedUser: user,
  });
});

// Delete a user
export const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;

  // Ensure password is provided
  if (!password) {
    return next(new AppError('Password is required to delete your account', 400));
  }

  const user = await User.findById(id).select('+password'); // Explicitly select the password field

  if (!user) {
    return next(new AppError('No user found with this ID', 404));
  }

  // Compare the provided password with the stored hashed password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return next(new AppError('Incorrect password. Cannot delete user.', 401));
  }

  // Delete the user
  await user.deleteOne();

  res.status(204).json({
    status: 'success',
    message: 'User successfully deleted',
  });
});
