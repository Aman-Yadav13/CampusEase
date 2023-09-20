import mongoose from "mongoose";
import Item from "../models/item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const { item, specification, placeFound, name, contact } = req.body;

  const newItem = new Item({
    item,
    specification,
    placeFound,
    name,
    contact,
  });

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
