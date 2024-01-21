import mongoose from "mongoose";

const tradeItemSchema = mongoose.Schema({
  name: String,
  contact: String,
  itemname: String,
  price: String,
  description: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Converting schema to model
const TradeItem = mongoose.model("TradeItem", tradeItemSchema);

export default TradeItem;
