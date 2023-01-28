import express from "express";
import { getBlogs } from "../controller/Controller.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "api jalan mastah" });
});

routes.get("/api/blog", getBlogs);

export default routes;
