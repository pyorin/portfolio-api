import express from "express";
import { getProjects } from "../controller/Controller.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ msg: "api jalan mastah" });
});

// routes.get("/api/blog", getBlogs);
routes.get("/api/projects", getProjects);

export default routes;
