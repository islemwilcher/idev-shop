import * as actionType from '../constants'

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('idev-profile', JSON.stringify({...action?.data}))
            return { ...state, authData: null, loading: false, error: null }
        case actionType.LOGOUT:
            localStorage.clear()
            return { ...state, authData: null, loading: false, error: null }
        default:
            return state        
    }
}

export default authReducer