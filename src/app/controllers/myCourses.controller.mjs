import course from "../models/course.mjs";
import { mutipleMongooseToObject } from "../../utils/mongoose.mjs";
import {
  findDeletedCourses,
  countDeletedCourses,
} from "../../utils/softDeleteHelpers.mjs";
class MyCoursesController {
  index(req, res, next) {
    Promise.all([course.find().sortable(res), countDeletedCourses()])
      .then(([courses, documentDeleted]) => {
        res.render("me/courses", {
          documentDeleted,
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  trash(req, res, next) {
    course
      .findDeleted()
      .sortable(res)
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
