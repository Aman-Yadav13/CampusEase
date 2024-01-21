import { FETCH_QUESTIONS, CREATE_QUESTION } from "../constants/actionTypes";

const questions = (state = { questions: [] }, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case CREATE_QUESTION:
      return { ...state, questions: [...state, action.payload] };
    default:
      return state;
  }
};

export default questions;
