
import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_PRODUCT, CREATE, UPDATE, DELETE } from '../constants/actiontype'
import * as api from '../api/index.js'

//all products
export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//single product
export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchProduct(id)

        dispatch({ type: FETCH_PRODUCT, payload: { product: data } })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

//create product
export const addProduct = (product, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.createProduct(product)

        dispatch({ type: CREATE, payload: data })
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

//update product
export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}

//all new products
export const allNewProducts = () => async (dispatch) => {
    try {
        const { data } = await api.allNewProducts()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//new products
export const newProducts = () => async (dispatch) => {
    try {
        const { data } = await api.newProducts()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}