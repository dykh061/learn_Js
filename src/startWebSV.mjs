// using express js start web server
import express from "express";
const app = express();
const port = 3000;
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Cho phép truy cập trực tiếp các file tĩnh trong thư mục 'public' (ảnh, CSS, JS, v.v.)

app.use(express.static(path.join(__dirname, "public")));

// handlebars viet layout html trong express

// dùng đễ xữ lí dữ liệu gửi từng submit của form hoặc 1 framework tránh dữ liệu bị undefine
app.use(express.urlencoded());
app.use(express.json());

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
// app.use(morgan("combined"));

//router
// route init
router(app);
// Action ---> dispatcher ---> function handler

//listen port 3000
app.listen(port, function () {
  console.log(`Example app listening at port: ${port}`);
});
