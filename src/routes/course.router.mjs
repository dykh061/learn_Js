import express from "express";
import course from "../app/controllers/course.controller.mjs";
const router = express.Router();

router.get("/create", course.create);
router.put("/update/:id", course.update);
router.post("/store", course.store);
router.get("/:id/edit", course.edit);
router.delete("/delete/:id", course.delete);
router.delete("/delete/:id/force", course.destroy);
router.patch("/restore/:id", course.restore);
router.get("/:slug", course.show);

export default router;
