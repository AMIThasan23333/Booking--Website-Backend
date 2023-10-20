import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// mongodb connection 
// Booking-Backend
// 5FIkGmWmoaJSVQOF
// mongodb+srv


async function main() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other connection options
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

main();


mongoose.connection.on("disconnected", () => {
    console.log("MongoDb DisConnected");
})


mongoose.connection.on("connected", () => {
    console.log("MongoDb Connected");
})

app.listen(8800, () => {
    console.log("connectd");
    main()
})