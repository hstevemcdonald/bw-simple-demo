import { CHECK_WORDS } from '../constants/action-types';

const initialState = {
  words: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_WORDS:
      return { words: action.payload };
    default:
      return state;
  }
};

export default postReducer;
