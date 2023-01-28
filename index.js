import express from "express";
import cors from "cors";
import routes from "./routes/Routes.js";
import * as dotenv from "dotenv";
import db from "./config/Database.js";
dotenv.config();

const app = express();
db;
app.use(cors());
app.use(routes);

app.listen(process.env.app_port, () => {
  console.log("server started!");
});

module.exports = app;
