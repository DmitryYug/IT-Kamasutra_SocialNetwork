import {combineReducers, createStore} from "redux";
import {AddPostAC, ChangePostAC, profileReducer} from "./profile-reducer";
import {AddMessageAC, ChangeMessageAC, dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

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
export type UsersType = {
    name: string,
    id: string,
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean,
}
export type UsersPageType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}
export type RootsStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersPageType
}


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store