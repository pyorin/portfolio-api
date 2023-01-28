import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const db = mongoose
  .connect(process.env.mongo_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected!"))
  .catch((err) => console.log(err));

export default db;
