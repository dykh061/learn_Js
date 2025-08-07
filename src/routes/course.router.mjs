import express from "express";
import course from "../app/controllers/course.controller.mjs";
const router = express.Router();

router.get("/create", course.create);
router.put("/update/:id", course.update);
router.post("/store", course.store);
router.get("/:id/edit", course.edit);
router.delete("/delete/:id", course.delete);
router.get("/:slug", course.show);

export default router;
