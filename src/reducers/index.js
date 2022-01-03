
import { combineReducers } from "redux";

import auth from './auth';
import products from './products';
import categories from './categories'
import cart from './carts'

export const reducers = combineReducers({ products, auth, categories, cart });
