import express from "express";
import {
  logIn,
  logOut,
  validateSession,
} from "../controller/auth.controller.js";
import isAuth from "../libs/isAuth.js";
const router = express.Router();

router.post("/login", logIn);
router.get("/validate-session", isAuth, validateSession);
router.delete("/logout", logOut);

export default router;
