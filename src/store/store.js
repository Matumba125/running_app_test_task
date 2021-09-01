import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import filterReducer from "./filterReducer";


export const rootReducer = combineReducers({
    filter: filterReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store