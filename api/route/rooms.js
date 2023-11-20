
import express  from "express";

import { verifyAdmin } from "../Utils/VerifyToken.js";
import {createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability} from '../Controllers/rooms.js'

const router = express.Router();
router.use(express.json());

router.get("/", (req,res) => {
    res.send("Hello , this is api endpoint ")
})


router.post("/:hotelid",verifyAdmin, createRoom  )
// UPDATE RcreateRoom
router.put("/:id", verifyAdmin , updateRoom );
router.put("/availability/:id", verifyAdmin , updateRoomAvailability );
// DELTE RcreateRoom
router.delete("/:id",verifyAdmin, deleteRoom);

// GET RcreateRoom
router.get("/:id", getRoom);
// GET ALL RcreateRoom
router.get("/",getRooms);




export default router;