import mongoose from "mongoose";
import TradeItem from "../models/tradeItem.js";

export const getTradeItems = async (req, res) => {
  try {
    const tradeitems = await TradeItem.find();
    res.status(200).json(tradeitems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTradeItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await TradeItem.findById(id);

    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTradeItem = async (req, res) => {
  const { name, contact, itemname, price, description, selectedFile } =
    req.body;

  const newTradeItem = new TradeItem({
    name,
    contact,
    itemname,
    price,
    description,
    selectedFile,
  });

  try {
    await newTradeItem.save();
    res.status(201).json(newTradeItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
