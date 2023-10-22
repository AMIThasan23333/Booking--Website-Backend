
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
router.delete("/:id", async (req, res) => {
  try {
      await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel Deleted');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// GET
router.get("/:id", async (req, res) => {
    try {
      const hotels = await Hotel.findById(req.params.id); 
       res.status(200).json(hotels)
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


// GET ALL

router.get("/", async (req, res,next) => {
    try {
      const hotels = await Hotel.find(); 
       res.status(200).json(hotels)
    } catch (err) {
     next(err)
    }
  });