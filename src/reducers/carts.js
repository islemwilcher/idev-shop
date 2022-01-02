import { FETCH_ALL_CARTS, FETCH_CART, CREATE,  UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actiontype'

const cartsReducer = (state = {isLoading: true, carts: { products:[], quantity: 0, total: 0 },}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_ALL_CARTS:
            return { ...state, carts: action.payload };
        case FETCH_CART:
            return { ...state, cart: action.payload.cart };
        case CREATE:
            return { ...state, carts: { ...state.carts.products.push(action.payload), ...state.carts.quantity += 1, ...state.carts.total += action.payload.price * action.payload.quantity } };
        case UPDATE:
            return { ...state, carts: state.carts.map((cart) => (cart._id === action.payload._id ? action.payload : cart)) };
        case DELETE:
            return { ...state, carts: state.carts.filter((cart) => cart._id !== action.payload) };
        default:
            return state;
    }
}

export default cartsReducer