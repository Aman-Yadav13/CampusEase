import * as api from "../api";
import { FETCH_USERS, ADD_USER_ORDER } from "../constants/actionTypes";

export const addUserOrder = (id, user_id) => async (dispatch) => {
  try {
    const { data } = api.addUserOrder(id, user_id);
    dispatch({ type: ADD_USER_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = (id, user_id) => async (dispatch) => {
  try {
    const { data } = api.getUsers(id, user_id);
    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
