import express from "express";
import { addUserOrder, getUsers, signin, signup } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/addOrder", addUserOrder);
router.get("/usersinfo", getUsers);

export default router;
