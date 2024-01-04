import mongoose from "mongoose";

const Connection = async (mongourl) => {
  const URL = mongourl;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;


// mongoose.connect('mongodb://127.0.0.1:27017/washUp', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })