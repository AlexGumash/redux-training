import { combineReducers, createStore } from "redux";

import { cartItems } from "./cart-items";
import { total } from "./total";

const rootReducer = combineReducers({
  cartItems,
  total
});

const store = createStore(rootReducer);

export default store;
