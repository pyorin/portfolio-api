// import BlogModels from "../models/BlogModels.js";
import ProjectModels from "../models/ProjectModels.js";

// export const getBlogs = (req, res) => {
//   BlogModels.find({}, (err, blogs) => {
//     if (err) return res.status(500).send(err);
//     res.send(blogs);
//   });
// };

export const getProjects = (req, res) => {
  ProjectModels.find({}, (err, projects) => {
    if (err) return res.status(500).send(err);
    res.send(projects);
  });
};
