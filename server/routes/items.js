import express from "express";

import { getItems, createItem } from "../controllers/items.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", auth, createItem);
// router.get("/:id", getPost);

export default router;
