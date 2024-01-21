import {
  FETCH_ORDERS,
  REMOVE_ONE,
  ADD_ONE,
  FETCH_TOTAL_PRICE,
  DELETE_PRODUCT,
} from "../constants/actionTypes";

const orders = (
  state = {
    items: [],
    totalCosts: 0,
  },
  action
) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, items: action.payload };

    case ADD_ONE:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case REMOVE_ONE:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case FETCH_TOTAL_PRICE:
      return { ...state, totalCosts: action.payload.totalCosts };
    case DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

export default orders;
