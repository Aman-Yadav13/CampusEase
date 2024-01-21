import { ADD_USER_ORDER, FETCH_USERS } from "../constants/actionTypes";

const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case ADD_USER_ORDER:
      return {
        users: state.items.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export default userReducer;
