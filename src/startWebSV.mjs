// using express js start web server
import express from "express";
const app = express();
const port = 3000;
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Cho phép truy cập trực tiếp các file tĩnh trong thư mục 'public' (ảnh, CSS, JS, v.v.)

app.use(express.static(path.join(__dirname, "public")));

// handlebars viet layout html trong express

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// http logger
app.use(morgan("combined"));

//router
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/pay", (req, res) => {
  res.render("pay");
});

//listen port 3000
app.listen(port, function () {
  console.log(`Example app listening at port: ${port}`);
});
