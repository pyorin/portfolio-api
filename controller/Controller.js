import BlogModels from "../models/BlogModels.js";

export const getBlogs = (req, res) => {
  BlogModels.find({}, (err, blogs) => {
    if (err) return res.status(500).send(err);
    res.send(blogs);
  });
};
