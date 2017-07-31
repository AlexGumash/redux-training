import cartProducts from "../api/cart";
import * as actionTypes from "../constants/actionTypes.js";

const initialState = cartProducts;

export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAKE_CART:
      if (action.data === "Lamborgini") {
        state[0].count += 1;
        state[0].total = state[0].count * state[0].price;
      } else if (action.data === "Ferrari") {
        state[1].count += 1;
        state[1].total = state[1].count * state[1].price;
      } else if (action.data === "Lada") {
        state[2].count += 1;
        state[2].total = state[2].count * state[2].price;
      } else {
        state[3].count += 1;
        state[3].total = state[3].count * state[3].price;
      }
      return [...state];
    case actionTypes.REMOVE_ITEM:
      if (action.data === "Lamborgini") {
        state[0].count -= 1;
        state[0].total = state[0].count * state[0].price;
      } else if (action.data === "Ferrari") {
        state[1].count -= 1;
        state[1].total = state[1].count * state[1].price;
      } else if (action.data === "Lada") {
        state[2].count -= 1;
        state[2].total = state[2].count * state[2].price;
      } else {
        state[3].count -= 1;
        state[3].total = state[3].count * state[3].price;
      }
      return [...state];
    default:
      return state;
  }
};
