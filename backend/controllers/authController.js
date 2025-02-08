
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password)
  try {
    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.json({
        success: false,
        message: "user doesn't exist",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      //sending cookie
      let token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET
      );
      let token_option = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
        httpOnly: true, // Makes the cookie accessible only via HTTP requests
        secure: process.env.NODE_ENV === 'production', // Ensures the cookie is only sent over HTTPS in production
        sameSite: 'None', // For cross-origin requests with credentials
      };
      
      return res.cookie("token", token, token_option).json({
        success: true,
        message: "Your Signed IN",
        user,
      });
    } else {
      return res.json({
        success: false,
        message: "password doesn't match",
      });
    }
  } catch (err) {
    return res.json({
      success: false,
      message: err.message,
    });
  }
};

export const signUp = async (req, res) => {
  try {
    const { fullName, email, password,passwordConfirm, username } = req.body;
    if ((username || email || password) == "") {
      return res.json({
        success: false,
        message: "please fill out ",
      });
    }
    if (password != passwordConfirm) {
      return res.json({
        success: false,
        message: "confirm password",
      });
    }

    let new_user = await User.findOne({ email });
    if (new_user) {
      return res.json({
        success: false,
        message: "user already exist",
      });
    }
    let hash_password = await bcrypt.hash(password, 10);

    new_user = await User.create({
      username,
      fullName,
      email,
      password: hash_password,
    });
    //sending cookie
    let token = jwt.sign(
      {
        id: new_user._id,
      },
      process.env.JWT_SECRET
    );
    let token_option = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
      httpOnly: true, // Makes the cookie accessible only via HTTP requests
      secure: process.env.NODE_ENV === 'production', // Ensures the cookie is only sent over HTTPS in production
      sameSite: 'None', // For cross-origin requests with credentials
    };
    
    return res.cookie("token", token, token_option).json({
      success: true,
      message: "Your Signed Up",
      new_user,
    });
  } catch (err) {
    if(err.code = '11000'){
      const duplicate = `Duplicate record: ${err.errmsg.split('{')[1].split('}')[0]} found`;
    return res.json({
      success: false,
      message:duplicate
    });
    }

    return res.json({
      success: false,
      message:err.msg
    });
  }
};

export const signOut = async (req, res) => {
  // Clear the cookie
  res.clearCookie("token");

  // Send the response back
  res.json({
    success: true,
    message: "Signed out successfully",
  });
};
