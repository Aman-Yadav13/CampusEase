import express from "express";

import {
  getTradeItems,
  createTradeItem,
  getTradeItem,
} from "../controllers/tradeItems.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getTradeItems);
router.get("/:id", getTradeItem);
router.post("/", auth, createTradeItem);
// router.get("/:id", getPost);

export default router;
