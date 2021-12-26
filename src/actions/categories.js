
import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_CATEGORY, CREATE, UPDATE, DELETE } from '../constants/actiontype'
import * as api from '../api/index.js'

//all categories
export const getCategories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCategories()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//single
export const getCategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchCategory(id)

        dispatch({ type: FETCH_CATEGORY, payload: { category: data } })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

//create 
export const addCategory = (category, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.createCategory(category)

        dispatch({ type: CREATE, payload: data })
        history.push('/managecategories')
    } catch (error) {
        console.log(error)
    }
}

//update 
export const updatedCategory = (id, category) => async (dispatch) => {
    try {
        const { data } = await api.updateCategory(id, category)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

//delete 
export const deleteCategory = (id) => async (dispatch) => {
    try {
        await api.deleteCategory(id);
    
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}
