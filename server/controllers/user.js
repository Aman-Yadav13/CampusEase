import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import User from "../models/user.js";
import Order from "../models/order.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "@a18191971Y",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword, contact } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      contact,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "@a18191971Y",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ users });
};

export const addUserOrder = async (req, res) => {
  try {
    const id = req.query.id;
    const user_id = req.query.user_id;
    const user = User.findById(user_id);

    user.orders.push(id);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
