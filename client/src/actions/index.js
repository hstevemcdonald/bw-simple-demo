import axios from 'axios';

import { CHECK_WORDS, WORD_API_URL } from '../constants/action-types';

const checkWordsSuccess = data => ({
  type: CHECK_WORDS,
  payload: data.words
});

export const checkWords = words => {
  return dispatch => {
    return axios.post(`${WORD_API_URL}/words`, words).then(response => {
      dispatch(checkWordsSuccess(response.data));
    });
  };
};
