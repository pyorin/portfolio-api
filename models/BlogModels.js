import mongoose from "mongoose";

const BlogModels = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  full: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("blogs", BlogModels);
