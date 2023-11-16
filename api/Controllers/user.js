

import User from './user.js'

export const updateUser = async(req,res, next) => {
    try {
        const upDatedUser = await User.findByIdAndUpdate(req.params.id, { $set : req.body }, {new : true });
        res.status(200).json(upDatedUser);
      } 
      
    catch (err) {
      next(err)
      }


}

export const deleteUser = async(req,res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User Deleted');
    }
    catch (err) {
       next(err)
      }


}


export const getUser = async(req,res, next) => {

    try {
        const users = await User.findById(req.params.id); 
         res.status(200).json(users)
      } 
    catch (err) {
        next(err)
      }


}

export const getUsers = async(req,res, next) => {
    try {
        const users = await User.find(); 
         res.status(200).json(users)
      } 
    catch (err) {
     next(err)
      }
}