import express from "express";
import course from "../app/controllers/course.controller.mjs";
const router = express.Router();

router.get("/create", course.create);
router.put("/update/:id", course.update);
router.post("/store", course.store);
router.get("/:id/edit", course.edit);
router.delete("/delete/bulk", course.destroyBulk);
router.delete("/delete/multiple", course.deleteMultiple);
router.delete("/delete/:id/force", course.destroy);
router.delete("/delete/:id", course.delete);
router.patch("/restore/bulk", course.restoreBulk);
router.patch("/restore/:id", course.restore);
router.get("/:slug", course.show);

export default router;
