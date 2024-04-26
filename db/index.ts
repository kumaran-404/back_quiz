import mongoose from "mongoose";

require("dotenv").config();
// atlas url
// const mongooseUrl =
//   'mongodb+srv://itrix:itrix@cluster0.ngqge.mongodb.net/itrix?retryWrites=true&w=majority'

// localURL
const mongooseUrl = "mongodb://localhost:27017/quiz_app";

export const connectToDb = async () => {
  // connecting
  mongoose.connect(mongooseUrl);

  const db = mongoose.connection;

  // error instance
  db.on("error", () => console.log("Error Connecting Database"));

  // success instance
  db.once("open", () => {
    console.log("Connected To DB");
  });
};
