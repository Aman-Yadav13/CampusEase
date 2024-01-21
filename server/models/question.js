import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  name: String,
  question: String,
  answer: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Converting schema to model
const Question = mongoose.model("Question", QuestionSchema);

export default Question;
