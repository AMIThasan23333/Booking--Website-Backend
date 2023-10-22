
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
router.put("/:id", async (req, res) => {
    try {
      const upDatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body }, {new : true });
      res.status(200).json(upDatedHotel);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// DELTE
// GET
router.get("/", async (req, res) => {
    try {
      const hotels = await Hotel.find(); 
      res.status(200).json(hotels);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
// GET ALL

