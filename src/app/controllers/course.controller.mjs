import Course from "../models/course.mjs";
import { mongooseToObject } from "../../utils/mongoose.mjs";
import { restoreCourseById } from "../../utils/softDeleteHelpers.mjs";
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        if (!course) {
          return res.status(404).send("Khoa Hoc Khong Ton Tai !!");
        }
        res.render("course/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("course/create");
  }
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    Course.findById({ _id: req.params.id })
      .then((course) => {
        if (!course) {
          return res.status(404).send("Khoa Hoc Khong Ton Tai!!");
        }
        res.render("course/edit", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }
  update(req, res, next) {
    Course.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  delete(req, res, next) {
    Course.delete({
      _id: req.params.id,
    })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  restore(req, res, next) {
    restoreCourseById(req.params.id)
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }
  destroy(req, res, next) {
    Course.deleteOne({
      _id: req.params.id,
    })
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  deleteMultiple(req, res, next) {
    const courseIds = req.body["courseIds[]"];
    Course.delete({
      _id: courseIds,
    })
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }
}

const courseController = new CourseController();
export default courseController;
