import * as api from "../api";
import { FETCH_QUESTIONS, CREATE_QUESTION } from "../constants/actionTypes";

export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestions();
    dispatch({ type: FETCH_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(question);
    dispatch({ type: CREATE_QUESTION, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
