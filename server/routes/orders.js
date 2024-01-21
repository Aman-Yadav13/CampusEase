import express from "express";
import {
  addOneToCart,
  deleteFromCart,
  getOrders,
  getTotalCosts,
  removeOneFromCart,
} from "../controllers/orders.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getOrders);

router.patch("/removeproduct", auth, removeOneFromCart);
router.get("/pricing", auth, getTotalCosts);
router.patch("/addproduct", auth, addOneToCart);
router.delete("/delete", auth, deleteFromCart);
// router.get("/:id", auth, getProductQuantity);

export default router;
