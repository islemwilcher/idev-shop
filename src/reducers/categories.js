import { FETCH_ALL_CAREGORIES, FETCH_CATEGORY, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actiontype';

const categoriesReducer = (state = { isLoading: true, categories: [],} , action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_CAREGORIES:
      return {...state, categories: action.payload };
    case FETCH_CATEGORY:
      return { ...state, category: action.payload.category };
    case CREATE:
      return { ...state, categories: [...state.categories, action.payload] };
    case UPDATE:
      return { ...state, categories: state.categories.map((category) => (category._id === action.payload._id ? action.payload : category)) };
    case DELETE:
      return { ...state, categories: state.categories.filter((category) => category._id !== action.payload) };
    default:
      return state;
  }
};

export default categoriesReducer;