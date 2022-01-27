
import { START_LOADING, END_LOADING, FETCH_ALL_ORDERS, FETCH_ORDER, CREATE, UPDATE, DELETE } from "../constants/actiontype";
import * as api from '../api/index.js'

//GET ALL
export const getAllOrders = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOrders()

        dispatch({ type:FETCH_ALL_ORDERS, payload:data })
        dispatch()
    } catch (error) {
        console.log(error);
    }
}

//order
export const getOrder = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchOrders(id)
        dispatch({ type: FETCH_ORDER, payload: { order: data } })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

//create
export const addOrder = (order) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createOrder(order)

        dispatch({ type: CREATE, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

//update
export const updatedOrder = (id, order) => async (dispatch) => {

    try {
        const { data } = await api.updateOrder(id, order)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//delet
export const deletedOrder = (id) => async (dispatch) => {
    try {
        await api.deleteOrder(id);
    
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}