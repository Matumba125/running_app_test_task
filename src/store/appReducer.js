const SWITCH_FILTER = 'APP/SWITCH-FILTER'
const SET_EDIT_MODE = 'APP/SET-EDIT-MODE'
const SET_ADD_MODE = 'APP/SET-ADD-MODE'

const initialState = {
    filterStatus: false,
    editMode: false,
    addMode: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_FILTER:
            return {
                ...state,
                filterStatus: action.filterStatus
            }
        case SET_EDIT_MODE:
            return {...state, editMode: action.editMode}
        case SET_ADD_MODE:
            return {...state, addMode: action.addMode}

        default:
            return state;
    }
}

export const switchFilter = (filterStatus) => ({
    type: SWITCH_FILTER,
    filterStatus: filterStatus,
})
export const setEditMode = (editMode) => ({
    type: SET_EDIT_MODE,
    editMode: editMode,
})
export const setAddMode = (addMode) => ({
    type: SET_ADD_MODE,
    addMode: addMode,
})

export default appReducer