
import express  from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../Controllers/hotel.js";
import { verifyAdmin } from "../Utils/VerifyToken.js";

const router = express.Router();
router.use(express.json());

                                                          


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/find/:id", verifyAdmin, deleteHotel);

router.get("/:id", getHotel);
router.get("/", getHotels);
router.get("/room/:id", getHotelRooms);

export default router