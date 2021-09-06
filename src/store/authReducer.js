import {AuthAPI, getTokenFromLS, setTokenToLS} from "../api/api";

const GET_TOKEN = 'AUTH/GET-TOKEN'
const SET_AUTH_STATUS = 'AUTH/SET-AUTH-STATUS'

const initialState = {
    authInfo: {},
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                authInfo: action.authInfo
            }
        case SET_AUTH_STATUS:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

//Actions

export const setAuthInfoAC = (authInfo) => ({
    type: GET_TOKEN,
    authInfo
})

export const setAuthStatusAC = (isAuth) => ({
    type: SET_AUTH_STATUS,
    isAuth
})

//Thunk


export const setAuthInfoTC = () =>
    (dispatch) => {
        const token = getTokenFromLS()
        if (token === null) {
            AuthAPI.getToken('hello')
                .then((res) => {
                    dispatch(setAuthInfoAC(res))
                    setTokenToLS(res.data.response.access_token)
                    dispatch(setAuthStatusAC(res.data.response.access_token))
                    console.log(res)
                })
        } else {
            dispatch(setAuthStatusAC(true))
        }
    }
