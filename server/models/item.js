import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  item: { type: String, required: true },
  specification: { type: String, required: true },
  placeFound: { type: String, required: true },
  name: { type: String, required: true },
  contact: { type: String },
});

export default mongoose.model("Item", itemSchema);
