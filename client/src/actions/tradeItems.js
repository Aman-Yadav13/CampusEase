import * as api from "../api";
import {
  FETCH_ALL_TRADE,
  CREATE_TRADE,
  START_LOADING,
  END_LOADING,
  FETCH_TRADE_ITEM,
} from "../constants/actionTypes";

export const getTradeItem = (id) => async (dispatch) => {
  try {
    //In response we always get data which we are destrucring
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchTradeItem(id);
    dispatch({ type: FETCH_TRADE_ITEM, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTradeItems = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchTradeItems();
    dispatch({ type: FETCH_ALL_TRADE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTradeItem = (tradeItem) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createTradeItem(tradeItem);
    dispatch({ type: CREATE_TRADE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};
