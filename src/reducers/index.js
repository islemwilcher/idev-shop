
import { combineReducers } from "redux"

import auth from './auth'
import products from './products'
import categories from './categories'

export const reducers = combineReducers({ products, categories, auth })
