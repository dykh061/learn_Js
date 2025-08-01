import express from "express";
import payController from "../app/controllers/pay.Controller.mjs";
const router = express.Router();

router.get("/", payController.index);

export default router;
