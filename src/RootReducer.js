import {authorReducer, quoteReducer, colorReducer} from './AppReducers';
import {combineReducers} from "redux";

export default combineReducers({
    author : authorReducer,
    quote : quoteReducer,
    color: colorReducer
});