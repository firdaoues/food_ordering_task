import  { combineReducers } from 'redux';

import cart from './cart';
import vendor from './vendor'

export default combineReducers({ vendor,cart })
