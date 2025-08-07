import payRouter from "./pay.router.mjs";
import siteRouter from "./site.router.mjs";
import courseRouter from "./course.router.mjs";
import myCoursesRouter from "./mycourses.router.mjs";
export default function route(app) {
  app.use("/me", myCoursesRouter);
  app.use("/course", courseRouter);
  app.use("/pay", payRouter);
  app.use("/", siteRouter);
}
