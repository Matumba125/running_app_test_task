const SWITCH_FILTER = 'SWITCH-FILTER'

const initialState = {
    filterStatus: false
}

const filterReducer = (state = initialState, action)=>{
    switch (action.type){
        case SWITCH_FILTER:
            return {
                ...state,
                filterStatus: action.filterStatus
            }

        default:
            return state;
    }
}

export const switchFilter = (filterStatus)=>({
    type: 'SWITCH-FILTER',
    filterStatus: filterStatus,
})

export default filterReducer