import course from "../models/course.mjs";
import { mutipleMongooseToObject } from "../../utils/mongoose.mjs";
import {
  findDeletedCourses,
  countDeletedCourses,
} from "../../utils/softDeleteHelpers.mjs";
class MyCoursesController {
  index(req, res, next) {
    let courseQuery = course.find();

    if ("_sort" in req.query) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    Promise.all([courseQuery, countDeletedCourses()])
      .then(([courses, documentDeleted]) => {
        res.render("me/courses", {
          documentDeleted,
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  trash(req, res, next) {
    findDeletedCourses()
      .then((trashCourses) => {
        res.render("me/trash", {
          trashCourses: mutipleMongooseToObject(trashCourses),
        });
      })
      .catch(next);
  }
}
const myCoursesController = new MyCoursesController();
export default myCoursesController;
