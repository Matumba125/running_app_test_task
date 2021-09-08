import {JogAPI, SwaggerTestAPI} from "../api/api";

const GET_JOGS = 'JOGS/GET-JOGS'
const FILTER_JOGS = 'JOGS/FILTER-JOGS'

const initialState = {
    'jogs': []
}

export const jogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOGS: {
            return {
                ...state,
                jogs: action.jogs.sort((a, b) => a.date >= b.date ? 1 : -1).reverse()
            }
        }
        case FILTER_JOGS:
            if(action.dateFrom !== '' && action.dateTo !=='') {
                return {
                    ...state,
                    jogs: state.jogs.filter(f => f.date >= action.dateFrom && f.date <= action.dateTo)
                }
            }else if(action.dateFrom == ''){
                return {
                    ...state,
                    jogs: state.jogs.filter(f => f.date <= action.dateTo)
                }
            }else if(action.dateTo == ''){
                return {
                    ...state,
                    jogs: state.jogs.filter(f => f.date >= action.dateFrom)
                }
            }
        default:
            return state
    }
}
// Actions

export const getJogsAC = (jogs) => ({
    type: GET_JOGS,
    jogs
})

export const filterJogsAC = (dateFrom, dateTo) => ({
    type: FILTER_JOGS,
    dateFrom,
    dateTo
})


// Thunk

export const getJogsTC = () =>
    (dispatch) => {
        JogAPI.getJogs()
            .then((jogs) => {
                dispatch(getJogsAC(jogs))
            })
    }

export const addJogTC = (date, time, distance) =>
    (dispatch) => {

        JogAPI.addJog(date, time, distance)
            .then((res) => {
                dispatch(getJogsTC())
            })
    }
export const editJogTC = (date, time, distance, jogId, userID) =>
    (dispatch) => {
        JogAPI.editJog(date, time, distance, jogId, userID)
            .then((res) => {
                dispatch(getJogsTC())
            })
    }

// export const AddJogTC = (distance, time, date) =>
//     (dispatch, getState) => {
//
//         let newJog = {date: `${changeDate}`, time: time, distance: distance};
//         let response = API.addNewJog(getTokenFromLocalStorage(), newJog);
//
//         let newItemOfJog = {
//             id: response.id,
//             user_id: getState().partOfTheState.currentUser.id,
//             distance: distance,
//             time: time,
//             date: changeDate.getTime() / 1000,
//         };
//
//         dispatch(addNewJogDataAC(newItemOfJog));
//
// };