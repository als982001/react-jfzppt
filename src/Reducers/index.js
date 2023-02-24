import { initialState } from './initialState.js';
import { INCREASE, DECREASE, increase, decrease } from '../Actions/index.js';

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
