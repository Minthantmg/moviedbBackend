const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectToDatabase = async () => {
  try {
    const dbUrl = process.env.MONGO_URL;
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbUrl);
    console.log("connected!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDatabase;
