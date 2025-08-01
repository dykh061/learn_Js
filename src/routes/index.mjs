import payRouter from "./pay.router.mjs";
import siteRouter from "./site.router.mjs";
import courseRouter from "./course.router.mjs";
export default function route(app) {
  app.use("/khoa-hoc", courseRouter);
  app.use("/pay", payRouter);
  app.use("/", siteRouter);
}
