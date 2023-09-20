import express from "express";

import { getItems, createItem } from "../controllers/items.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", createItem);
// router.get("/:id", getPost);

export default router;
