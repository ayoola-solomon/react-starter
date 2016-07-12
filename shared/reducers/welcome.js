import * as types from '../constants/actionTypes';

const initialState = {
  text: null
};

export default function welcome(state = initialState, action) {
  switch (action.type) {
    case types.WELCOME:
      return {
        ...state,
        text: 'Welcome to React Redux Isomorphic Starter',
      }

    default:
      return state;
  }
}
