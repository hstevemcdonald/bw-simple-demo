import { CHECK_WORDS } from '../constants/action-types';

const initialState = {
  words: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_WORDS:
      let words = {};
      let keys = action.payload.map(word => {
        let wordText = word.word;
        words[wordText] = word.count;
        return wordText;
      });
      let hashTable = [];
      keys.sort().forEach(key => {
        let hashKey = words[key];
        if (!hashTable[hashKey]) {
          hashTable[hashKey] = [key];
        } else {
          hashTable[hashKey].unshift(key);
        }
      });
      let stack = [];
      for (let key in hashTable) {
        hashTable[key].forEach(word => {
          stack.unshift({ word, count: key });
        });
      }
      return { words: stack };
    default:
      return state;
  }
};

export default postReducer;
