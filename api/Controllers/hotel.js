import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";



export const createHotel = async(req,res, next) => {
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    
    }
    catch (error) {
       next(error)
      }


}

export const updateHotel = async(req,res, next) => {
    try {
        const upDatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body }, {new : true });
        res.status(200).json(upDatedHotel);
      } 
    catch (error) {
      next(error)
      }


}

export const deleteHotel = async(req,res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json('Hotel Deleted');
    }
    catch (error) {
       next(error)
      }


}


export const getHotel = async(req,res, next) => {
    try {
        const hotels = await Hotel.findById(req.params.id); 
         res.status(200).json(hotels)
      } 
    catch (error) {
        next(error)
      }
}

export const getHotels = async(req,res, next) => {
  

    const { min,max, ...others} =req.query;
    
    try {
       const hotels = await Hotel.find({
          ...others,
          cheapestPrice : {$gte : min | 1, $lte: max || 999},
        }).limit(req.query.limit);
         res.status(200).json(hotels)
      } 
    catch (error) {
     next(error)
      } 
}


export const countByCity = async (req, res, next) => {
  // Making an array of cities from the query parameter
  const cities = req.query.cities.split(",");

  try {

    // Using Promise.all to asynchronously count hotels for each city
    const list = await Promise.all(
      cities.map(async (city) => {
        // Count the number of hotels in the specified city
        const count = await Hotel.countDocuments({ city: city });
        return { city, count };
      })
    );

    // Responding with the list of cities and their respective counts
    res.status(200).json(list);
  } catch (error) {
    // Handling errors by passing them to the next middleware
    next(error);
  }
};


export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartments" });
    const resortCount = await Hotel.countDocuments({ type: "resorts" });
    const villaCount = await Hotel.countDocuments({ type: "villas" });
    const cabinCount = await Hotel.countDocuments({ type: "cabins" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};



export const getHotelRooms = async (req,res,next) => {

  try {
    const hotel =  await Hotel.findById(req.params.id)

    const list = await Promise.all(
      hotel.rooms.map((room) => {

        return Room.findById(room)

      })
    )
    res.status(200).json(list)
  } catch (error) {
    next(error)
  }
}