import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actiontype";

import axios from "axios";

// Add to Cart
export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:8001/api/products/find/${id}`);

    dispatch({
    type: ADD_TO_CART,
    payload: {
        productId: data._id,
        name: data.name,
        description: data.description,
        price: data.price,
        color: data.color,
        size: data.size,
        image: data.img,
        quantity,
    },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
