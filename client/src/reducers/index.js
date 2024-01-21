import { combineReducers } from "redux";
import auth from "./auth";
import items from "./items";
import tradeItems from "./tradeItems";
import questions from "./questions";
import user from "./users";
import orders from "./orders";
export default combineReducers({
  auth,
  items,
  tradeItems,
  questions,
  orders,
  user,
});
