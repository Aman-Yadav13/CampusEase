import { FETCH_ALL, CREATE, SEARCH_ITEM } from "../constants/actionTypes";

const items = (state = { items: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, items: action.payload };
    case CREATE:
      return { ...state, items: [...state, action.payload] };

    default:
      return state;
  }
};

export default items;
