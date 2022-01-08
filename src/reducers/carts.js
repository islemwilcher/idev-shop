import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../constants/actiontype.js'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
    case ADD_TO_CART:
        const item = action.payload;

        const existItem = state.cartItems.find((x) => x.productId === item.productId);
        if(existItem) {
            return {
            ...state,
            cartItems: state.cartItems.map((i) =>
            i.productId === existItem.productId ? item : i
            ),
            
            }
        } else {
        return {
            ...state,
            cartItems: [...state.cartItems, item],
        };
        }

    case REMOVE_FROM_CART:
        return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.productId !== action.payload),
        };

    default:
        return state;
    }
};
export default cartReducer