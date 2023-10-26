
import express  from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../Controllers/hotel.js";
import { verifyAdmin } from "../Utils/VerifyToken.js";

const router = express.Router();
router.use(express.json());


router.post("/",verifyAdmin,createHotel )





// UPDATE Hotel
router.put("/:id", verifyAdmin ,updateHotel);

// DELTE Hotel
router.delete("/:id",verifyAdmin, deleteHotel);



// GET Hotel
router.get("/:id",getHotel);


// GET ALL Hotel

router.get("/",getHotels);

export default router