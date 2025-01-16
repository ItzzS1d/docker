import express from "express";
import { generatePdf } from "../controller/document.controller.js";
import isAuth from "../libs/isAuth.js";
const router = express.Router();

router.get("/generate-pdf", isAuth, generatePdf);

export default router;
