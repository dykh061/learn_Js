import payRouter from "./pays.mjs";
import siteRouter from "./site.mjs";
export default function route(app) {
  app.use("/pay", payRouter);
  app.use("/", siteRouter);
}
