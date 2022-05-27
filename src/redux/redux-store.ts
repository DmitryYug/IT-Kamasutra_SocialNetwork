import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducersPackage = combineReducers({
    profileReducer,
    dialogsReducer
})

let store = createStore(reducersPackage)


export default store