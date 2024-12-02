import express from "express";
import { login, logout, refreshToken, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// define routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refreshToken);

export default router;
