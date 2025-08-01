import course from "../models/course.mjs";
import { mongooseToObject } from "../../utils/mongoose.mjs";
class CourseController {
  show(req, res, next) {
    course
      .findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("course/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

const courseController = new CourseController();
export default courseController;
