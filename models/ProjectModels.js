import mongoose from "mongoose";

const ProjectModels = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  links: {
    type: String,
    require: true,
  },
  stack: {
    type: Array,
    require: true,
  },
});

export default mongoose.model("projects", ProjectModels);
