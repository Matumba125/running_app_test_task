import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import appReducer, {setMobileModeAC} from "./appReducer";
import {jogReducer} from "./jogReducer";
import {authReducer} from "./authReducer";


export const rootReducer = combineReducers({
    app: appReducer,
    jogs: jogReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
