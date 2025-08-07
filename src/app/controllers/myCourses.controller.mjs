import course from "../models/course.mjs";
import { mutipleMongooseToObject } from "../../utils/mongoose.mjs";
class MyCoursesController {
  index(req, res, next) {
    course
      .find({})
      .then((course) => {
        res.render("me/courses", {
          courses: mutipleMongooseToObject(course),
        });
      })
      .catch(next);
  }
}
const myCoursesController = new MyCoursesController();
export default myCoursesController;
