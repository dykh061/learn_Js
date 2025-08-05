import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, default: "haha" },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: "name" },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Course", Course);
