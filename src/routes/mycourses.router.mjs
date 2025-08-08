import express from "express";
const router = express.Router();
import mcController from "../app/controllers/myCourses.controller.mjs";

router.get("/stored/courses", mcController.index);
router.get("/trash/courses", mcController.trash);

export default router;
