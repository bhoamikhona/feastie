import express from "express";
import {
  getFavorites,
  toggleFavorite,
} from "../controllers/favoritesController.js";
import protect from "../middleware/protect.js";

const router = express.Router();

router.get("/", protect, getFavorites);
router.post("/:restaurantId", protect, toggleFavorite);

export default router;
