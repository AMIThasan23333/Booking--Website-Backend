import { createError } from "../Utils/CreateError.js";
import User from "../models/User.js"

import  bcrypt  from 'bcryptjs';


export const register = async (req, res, next) => {
    const saltRounds = 10;
    const password = req.body.password;
  
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully" }); 
    } catch (err) {
      next(err);
    }
  };



  export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return next(createError(404, "User not found!"));
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect)
        return next(createError(400, "Wrong password or username!"));
  
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT
      );
  
      const { password, isAdmin, ...otherDetails } = user._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
      next(err);
    }
  };