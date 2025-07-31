import express from "express";
import paysController from "../app/controllers/paysController.mjs";
const router = express.Router();

router.get("/", paysController.index);

export default router;
