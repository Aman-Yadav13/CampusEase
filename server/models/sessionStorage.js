import mongoose from "mongoose";

const sessionStorageSchema = mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  sessionUsername: {
    type: String,
    required: true,
  },
  sessionUserId: {
    type: String,
    required: true,
  },
  connectionStatus: {
    type: Boolean,
  },
});

//Converting schema to model
const Session = mongoose.model("Session", sessionStorageSchema);

export default Session;
