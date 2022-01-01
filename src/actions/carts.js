import { FETCH_ALL_CARTS, FETCH_CART, CREATE,  UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actiontype'

import * as api from '../api/index.js'

//all carts
export const getCarts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCarts()
        dispatch({ type: FETCH_ALL_CARTS, payload: data})
    } catch (error) {
        console.log(error)
    }
}

//singl cart
export const getCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchCart(id)
        dispatch({ type: FETCH_CART, payload: { cart: data }})
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

//create
export const createCart = (cart) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createdCart(cart)
        dispatch({ type: CREATE, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

//update 
export const updateCart= (id, cart) => async (dispatch) => {
    try {
        const { data } = await api.updatedCart(id, cart)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//delete 
export const deleteCart = (id) => async (dispatch) => {
    try {
        await api.deletedCart(id);
    
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}