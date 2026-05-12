import express from "express";
import {
  register,
  login,
  getUserProfile,
  updateUserProfile,
  deleteAccount,
} from "../controllers/authController.js";
import protect from "../middleware/protect.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.delete("/profile", protect, deleteAccount);

export default router;
