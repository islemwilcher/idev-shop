
import { combineReducers } from "redux"

import auth from './auth'
import products from './products'

export const reducers = combineReducers({ products, auth })
