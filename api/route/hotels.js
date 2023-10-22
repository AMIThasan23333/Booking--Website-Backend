
import express  from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../Controllers/hotel.js";

const router = express.Router();
router.use(express.json());


router.post("/",createHotel )





// UPDATE Hotel
router.put("/:id",updateHotel);

// DELTE Hotel
router.delete("/:id",deleteHotel);



// GET Hotel
router.get("/:id",getHotel);


// GET ALL Hotel

router.get("/",getHotels);

export default router