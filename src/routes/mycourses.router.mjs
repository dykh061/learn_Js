import express from "express";
const router = express.Router();
import mcController from "../app/controllers/myCourses.controller.mjs";

router.get("/stored/courses", mcController.index);

export default router;
