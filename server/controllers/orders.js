import mongoose from "mongoose";
import Order from "../models/order.js";
import TradeItem from "../models/tradeItem.js";
import User from "../models/user.js";

export const getOrders = async (req, res) => {
  try {
    const user_id = req.query.user_id;

    const orders = await Order.find({ user: user_id });
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addOneToCart = async (req, res) => {
  const id = req.query.id;
  const user_id = req.query.user_id;
  try {
    // console.log("Received request to add one to cart for item:", id);
    // console.log("user:", user_id);
    const orderitem = await Order.findOne({ tradeItem: id, user: user_id });
    if (!orderitem) {
      // console.log("Order item not found. Creating a new order.");
      const tradeitem = await TradeItem.findById(id);
      if (!tradeitem) {
        return res.status(404).json({ message: "Item not found" });
      }

      const newOrder = new Order({
        tradeItem: id,
        quantity: 1,
        totalPrice: tradeitem.price,
        user: user_id,
      });

      orderitem = await newOrder.save();
      // console.log("New order created:", orderitem);
      return res.status(201).json(orderitem);
    }

    // console.log("Order item found. Incrementing quantity.");
    const tradeitem = await TradeItem.findById(orderitem.tradeItem);
    if (!tradeitem) {
      return res.status(404).json({ message: "Item not found" });
    }

    const num_order_tprice = parseFloat(orderitem.totalPrice).toFixed(2);
    const num_titem_price = parseFloat(tradeitem.price).toFixed(2);
    const updated_num_tprice = (
      parseFloat(num_order_tprice) + parseFloat(num_titem_price)
    ).toFixed(2);
    orderitem.totalPrice = updated_num_tprice;
    orderitem.quantity += 1;
    await orderitem.save();

    return res.status(200).json(orderitem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteFromCart = async (req, res) => {
  const id = req.query.id;
  const user_id = req.query.user_id;

  try {
    await Order.deleteOne({ tradeItem: id, user: user_id });
    res.status(200).send({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getTotalCosts = async (req, res) => {
  try {
    const user_id = req.query.user_id;
    const orders = await Order.find({ user: user_id });
    let totalCosts = 0;
    for (const order of orders) {
      const tradeItem = await TradeItem.findById(order.tradeItem);

      if (tradeItem) {
        totalCosts += order.quantity * parseFloat(tradeItem.price);
      }
    }

    res.status(200).json({ totalCosts: totalCosts });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const removeOneFromCart = async (req, res) => {
  const id = req.query.id;
  const user_id = req.query.user_id;
  try {
    let orderitem = await Order.findOne({ tradeItem: id, user: user_id });

    if (!orderitem) {
      console.log("Order item not found.");
    } else if (orderitem.quantity > 1) {
      console.log("Order item found. Decrementing quantity.");
      const tradeitem = await TradeItem.findById(orderitem.tradeItem);
      const num_order_tprice = parseFloat(orderitem.totalPrice).toFixed(2);
      const num_titem_price = parseFloat(tradeitem.price).toFixed(2);
      const updated_num_tprice = (
        parseFloat(num_order_tprice) - parseFloat(num_titem_price)
      ).toFixed(2);
      orderitem.totalPrice = updated_num_tprice;
      orderitem.quantity -= 1;

      await orderitem.save();
      return res.status(200).json(orderitem);
    } else {
      await Order.deleteOne({ tradeItem: id, user: user_id });
      res.status(200).send({ message: "Item deleted successfully" });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const getProductQuantity = async (req, res) => {
//   const id = req.query.id;
//   const user_id = req.query.user_id;
//   try {
//     const quantity = 0;
//     const orderitem = await Order.find({ tradeItem: id, user: user_id });
//     if (orderitem) {
//       quantity = orderitem.quantity;
//     }
//     res.status(200).json({ quantity: quantity });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
