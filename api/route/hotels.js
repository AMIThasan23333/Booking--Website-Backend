
import express  from "express";

import Hotel from "../models/Hotel.js";

const router = express.Router();
router.use(express.json());


router.post("/", async(req,res) => {


    const newHotel = new Hotel(req.body)
    try{
      
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    
    }
    catch (err) {
        res.status(500).json({ error: err.message });
      }


})


export default router


// UPDATE
// DELTE
// GET
// GET ALL

