import express from "express";
const router = express.Router();
import siteController from "../app/controllers/site.Controller.mjs";

router.get("/search", siteController.search);
router.get("/", siteController.index);

export default router;
