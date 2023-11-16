
import express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.js";
import { verifyAdmin, verifyUser } from "../Utils/VerifyToken.js";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hello , this is api endpoint ")
})


router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})





// UPDATE User
router.put("/:id", verifyUser ,updateUser);




// DELeTE User
router.delete("/:id", verifyUser.deleteUser);



// GET User
router.get("/:id",verifyUser, getUser);




// GET ALL User
router.get("/",verifyAdmin ,getUsers);




export default router;