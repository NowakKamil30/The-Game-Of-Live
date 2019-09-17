import {combineReducers} from "redux";
import mainGameReducer from "./mainGameReducer";
import showMenuReducer from "./showMenuReducer";
export default combineReducers({
    mainGame:mainGameReducer,
    showMenu:showMenuReducer
});