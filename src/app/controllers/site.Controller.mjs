import course from "../models/course.mjs";
import { mutipleMongooseToObject } from "../../utils/mongoose.mjs";
class SiteController {
  //[GET] /home
  index(req, res, next) {
    course
      .find({})
      .then((course) => {
        res.render("home", {
          course: mutipleMongooseToObject(course),
        });
      })
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }
}
const siteController = new SiteController();
export default siteController;
