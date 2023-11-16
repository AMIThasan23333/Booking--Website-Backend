import Hotel from "../models/Hotel";
import Room from "../models/Room";




export const createRoom = async (req,res,next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);


    try{
        const savedRoom = await newRoom.save();
        try{

           await Hotel.findByIdAndUpdate(hotelId, {
            $push : { rooms : savedRoom._id},
           })

        }

        catch (err) {
              next(err)
        }

        res.status(200).json(savedRoom)

    }
    catch (err){
             next(err)
    }

}

export const updateHotel = async(req,res, next) => {
    try {
        const upDatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body }, {new : true });
        res.status(200).json(upDatedHotel);
      } 
    catch (err) {
      next(err)
      }


}

export const deleteHotel = async(req,res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json('Hotel Deleted');
    }
    catch (err) {
       next(err)
      }


}

export const getHotel = async(req,res, next) => {

    try {
        const hotels = await Hotel.findById(req.params.id); 
         res.status(200).json(hotels)
      } 
    catch (err) {
        next(err)
      }


}

export const getHotels = async(req,res, next) => {
    try {
        const hotels = await Hotel.find(); 
         res.status(200).json(hotels)
      } 
    catch (err) {
     next(err)
      }
}