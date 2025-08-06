import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}/dyteidea`);
  } catch (error) {
    console.log("DB connected failed");
    console.log(error);
  }
};

export default connectDB;
