
import { FETCH_ALL_ORDERS, FETCH_ORDER, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from "../constants/actiontype";

const ordersReducer = (state = { isLoading: true, orders: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL_ORDERS:
            return { ...state, orders: action.payload }
        case FETCH_ORDER:
            return { ...state, order: action.payload.order }
        case CREATE:
            return { ...state, orders: [...state.products, action.payload] }
        case UPDATE:
            return { ...state, orders: state.products.map((order) =>( order._id === action.payload._id ? action.payload : order)) }
        case DELETE:
            return { ...state, orders: state.orders.filter((order) => order._id !== action.payload) }
        default:
            return state
    }
}

export default ordersReducer