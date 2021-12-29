
import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_ALL_NEW, FETCH_NEW, FETCH_PRODUCT, CREATE, UPDATE, DELETE, FETCH_ALL_BEST, FETCH_BEST } from '../constants/actiontype'
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
export const addProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createProduct(product);

        dispatch({ type: CREATE, payload: data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

//update product
export const updatedProduct = (id, product) => async (dispatch) => {
    console.log(id, product)
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
        await api.deleteProduct(id);
    
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

//all new products
export const allNEWProducts = () => async (dispatch) => {
    try {
        const { data } = await api.allNEWProducts()

        dispatch({ type: FETCH_ALL_NEW, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//new products
export const neWProducts = () => async (dispatch) => {
    try {
        const { data } = await api.neWProducts()

        dispatch({ type: FETCH_NEW, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//all best products
export const allBESTProducts = () => async (dispatch) => {
    try {
        const { data } = await api.allBESTProducts()

        dispatch({ type: FETCH_ALL_BEST, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//best products
export const besTProducts = () => async (dispatch) => {
    try {
        const { data } = await api.besTProducts()

        dispatch({ type: FETCH_BEST, payload: data })
    } catch (error) {
        console.log(error)
    }
}