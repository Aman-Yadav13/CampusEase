import { combineReducers } from "redux";
import auth from "./auth";
import items from "./items";

export default combineReducers({
  auth,
  items,
});
