
import { combineReducers } from "redux";

import auth from './auth';
import products from './products';
import categories from './categories'
import cart from './carts'
import orders from './orders'

export const reducers = combineReducers({ products, auth, categories, cart, orders });
