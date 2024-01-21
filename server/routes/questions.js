import express from "express";

import { getQuestions, createQuestion } from "../controllers/questions.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getQuestions);
router.post("/", auth, createQuestion);

export default router;
