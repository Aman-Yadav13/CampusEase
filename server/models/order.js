import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  tradeItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TradeItem", // Reference to the TradeItem model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  placedAt: {
    type: Date,
    default: new Date(),
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

//Converting schema to model
const Order = mongoose.model("Order", orderSchema);

export default Order;
