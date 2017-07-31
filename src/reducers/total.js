import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
  countOfItems: 0,
  total: 0
};

export const total = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIND_TOTAL:
      state.countOfItems = 0;
      state.total = 0;

      action.data.map(item => {
        if (item.count > 0) {
          state.countOfItems += item.count;
          state.total += item.total;
        }
      });
      return state;
    default:
      return state;
  }
};
