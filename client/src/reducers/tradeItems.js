import {
  FETCH_ALL_TRADE,
  CREATE_TRADE,
  START_LOADING,
  END_LOADING,
  FETCH_TRADE_ITEM,
} from "../constants/actionTypes";

const tradeItems = (state = { isLoading: true, tradeItems: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_ALL_TRADE:
      return { ...state, tradeItems: action.payload };
    case FETCH_TRADE_ITEM:
      return { ...state, tiditem: action.payload };
    case CREATE_TRADE:
      return { ...state, tradeItems: [...state, action.payload] };

    default:
      return state;
  }
};

export default tradeItems;
