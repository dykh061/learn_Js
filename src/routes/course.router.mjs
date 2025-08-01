import express from "express";
import course from "../app/controllers/course.controller.mjs";
const router = express.Router();

router.get("/:slug", course.show);

export default router;
