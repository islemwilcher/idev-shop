
import { FETCH_ALL, FETCH_CATEGORY, CREATE, UPDATE ,DELETE, START_LOADING, END_LOADING } from '../constants/actiontype'

const categoryReducer = (state = {isLoading: true, categories: []}, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, categories: action.payload };
        case FETCH_CATEGORY:
            return { ...state, product: action.payload.product };
        case CREATE:
            return { ...state, categories: [ ...state.categories, action.payload ] };
        case UPDATE:
            return { ...state, categories: state.categories.map((product) => (product._id === action.payload._id ? action.payload : product)) };
        case DELETE:
            return { ...state, categories: state.categories.filter((product) => product._id !== action.payload) };
        default:
            return state;
    }
};

export default categoryReducer