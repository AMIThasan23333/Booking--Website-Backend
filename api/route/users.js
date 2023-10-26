
import express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.js";
import { verifyAdmin, verifyUser } from "../Utils/VerifyToken.js";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Hello , this is api endpoint ")
})



// UPDATE User
router.put("/:id", verifyUser ,updateUser);

// DELTE User
router.delete("/:id", verifyUser.deleteUser);



// GET User
router.get("/:id",verifyUser, getUser);


// GET ALL User

router.get("/",verifyAdmin ,getUsers);


export default router;