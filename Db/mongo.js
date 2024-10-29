const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDatabase = async () => {
  try {
    const dbUrl = process.env.MONGO_URL;
    if(!dbUrl){
      throw new Error("MongoDb connection failed!Please check env file for enviroment variable!")
    }
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbUrl);
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
