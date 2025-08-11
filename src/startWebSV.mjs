// using express js start web server
import express from "express";
const app = express();
const port = 3000;
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.mjs";
import * as db from "./config/db/index.mjs";
import methodOverride from "method-override";
import { sortMiddleware } from "./app/middlewares/sort.middleware.mjs";
db.connect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Cho phép truy cập trực tiếp các file tĩnh trong thư mục 'public' (ảnh, CSS, JS, v.v.)

app.use(express.static(path.join(__dirname, "public")));

//Cho phép dùng method put path delete trong form html bằng cách giả lập method
app.use(methodOverride("_method"));

// handlebars viet layout html trong express

// dùng đễ xữ lí dữ liệu gửi từng submit của form hoặc 1 framework tránh dữ liệu bị undefine
app.use(express.urlencoded());
app.use(express.json());

//Custom middleware
app.use(sortMiddleware);

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      addOne: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default";
        const icons = {
          default: "cil-elevator",
          asc: "bi bi-sort-up",
          desc: "bi bi-sort-up-alt",
        };
        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };
        const type = types[sortType] || "default";
        const icon = icons[sortType] || types.default;

        return `<a href="?_sort&column=${field}&type=${type}">
            <i class="${icon}"></i>
          </a>`;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// http logger
// app.use(morgan("combined"));

//router
// route init
router(app);
// Action ---> dispatcher ---> function handler

//listen port 3000
app.listen(port, function () {
  console.log(`App listening at port: ${port}`);
});
