import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfilePageType, profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {UsersPageType, usersReducer} from "./users-reducer";
import {AuthPageType, authReducer } from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


//DialogsTypes
export type MessageItemType = {
    id: string,
    message: string
}
export type DialogItemType = {
    id: string,
    name: string,
    path: string
}
export type DialogsPageType = {
    newMessageText: string,
    dialogs: Array<DialogItemType>,
    messages: Array<MessageItemType>
}

export type RootsStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
    authPage: AuthPageType
}


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authPage: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store