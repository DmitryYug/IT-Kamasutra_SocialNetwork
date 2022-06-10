import {combineReducers, createStore} from "redux";
import {AddPostAC, ChangePostAC, profileReducer} from "./profile-reducer";
import {AddMessageAC, ChangeMessageAC, dialogsReducer} from "./dialogs-reducer";
import {usersReducer, UsersType} from "./users-reducer";

export type PostItemType = {
    id: string,
    message: string,
    likes: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostItemType>
}
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
    users: Array<UsersType>
}


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer
})

let store = createStore(rootReducer)

export type  AppRootStateType = ReturnType<typeof rootReducer>

export default store