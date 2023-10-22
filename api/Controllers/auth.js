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
        password: hashedPassword, // Save the hashed password, not hashedPassword.password
      });
  
      await newUser.save();
      res.status(201).json({ message: "User created successfully" }); // Corrected the response format
    } catch (err) {
      next(err);
    }
  };