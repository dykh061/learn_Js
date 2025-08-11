import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import slugify from "slugify";
import mongooseDelete from "mongoose-delete";

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, default: "haha" },
    description: { type: String },
    image: { type: String },
    slug: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

Course.pre("save", async function (next) {
  if (!this.slug && this.name) {
    const baseSlug = slugify(this.name, { lower: true, strict: true });
    let uniqueSlug = baseSlug;
    let count = 1;
    while (await mongoose.models.Course.findOne({ slug: uniqueSlug })) {
      uniqueSlug = `${baseSlug}-${count++}`;
    }
    this.slug = uniqueSlug;
  }
  next();
});

// custom query helpers
Course.query.sortable = function (res) {
  if (res.locals._sort.enable) {
    const { column, type } = res.locals._sort;
    return this.sort({
      [column]: type,
    });
  }
  return this;
};

// add plugins

Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("Course", Course);
