import { combineReducers } from 'redux';
import words from './wordReducer';

export default combineReducers({ words: words });
