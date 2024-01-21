import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  contact: { type: String, default: null },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
});

export default mongoose.model("User", userSchema);
