
import { FETCH_ALL, FETCH_PRODUCT, CREATE, UPDATE ,DELETE, START_LOADING, END_LOADING } from '../constants/actiontype'

const productReducer = (state = {isLoading: true, products: []}, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, products: action.payload };
        case FETCH_PRODUCT:
            return { ...state, product: action.payload.product };
        case CREATE:
            return { ...state, products: [ ...state.products, action.payload ] };
        case UPDATE:
            return { ...state, products: state.products.map((product) => (product._id === action.payload._id ? action.payload : product)) };
        case DELETE:
            return { ...state, products: state.products.filter((product) => product._id !== action.payload) };
        default:
            return state;
    }
};

export default productReducer