import { FETCH_ALL_CARTS, FETCH_CART, CREATE,  UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actiontype'

//all carts
export const getCarts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCarts()
        dispatch({ type: FETCH_ALL_CARTS, payload: data})
    } catch (error) {
        console.log(error)
    }
}