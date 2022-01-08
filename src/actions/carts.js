import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET} from "../constants/actiontype";
import *as api from '../api/index.js'
import axios from "axios";

// Add to Cart
export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/products/find/${id}`);

    dispatch({
    type: ADD_TO_CART,
    payload: {
        product: data._id,
        name: data.name,
        price: data.price,
        image: data.img,
        quantity,
    },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart));
};

// // REMOVE FROM CART
// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//     dispatch({
//     type: REMOVE_CART_ITEM,
//     payload: id,
//     });

//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// // SAVE SHIPPING INFO
// export const saveShippingInfo = (data) => async (dispatch) => {
//     dispatch({
//     type: SAVE_SHIPPING_INFO,
//     payload: data,
//     });

//     localStorage.setItem("shippingInfo", JSON.stringify(data));
// };