import { combineReducers } from "redux";
import filters from "./filters";
import shavermas from "./shavermas";
import cart from "./cart";

const rootReducer = combineReducers({
  filters,
  shavermas,
  cart,
});

export default rootReducer;
