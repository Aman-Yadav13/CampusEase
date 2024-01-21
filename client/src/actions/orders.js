import * as api from "../api";
import {
  FETCH_ORDERS,
  REMOVE_ONE,
  ADD_ONE,
  FETCH_TOTAL_PRICE,
  DELETE_PRODUCT,
} from "../constants/actionTypes";

export const fetchOrders = (user_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders(user_id);
    dispatch({ type: FETCH_ORDERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addOneToCart = (id, user_id) => async (dispatch) => {
  try {
    const { data } = await api.addOneToCart(id, user_id);
    dispatch({ type: ADD_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeOneFromCart = (id, user_id) => async (dispatch) => {
  try {
    const { data } = await api.removeOneFromCart(id, user_id);
    dispatch({ type: REMOVE_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const getProductQuantity = (id, user_id) => async (dispatch) => {
//   try {
//     const { quantity } = await api.getProductQuantity(id, user_id);
//     dispatch({ type: FETCH_QUANTITY, payload: quantity });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const getTotalCosts = (user_id) => async (dispatch) => {
  try {
    const { data } = await api.getTotalCosts(user_id);
    dispatch({ type: FETCH_TOTAL_PRICE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFromCart = (id, user_id) => async (dispatch) => {
  try {
    api.deleteFromCart(id, user_id);
    dispatch({ type: DELETE_PRODUCT, payload: user_id });
  } catch (error) {
    console.log(error.message);
  }
};
