import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {AuthPageType, authReducer } from "./auth-reducer";

//ProfileTypes
export type ProfileItemType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {large: any, small: any}
    userId: number
}
export type PostItemType = {
    id: string,
    message: string,
    likes: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostItemType>
    profile: ProfileItemType | null
}
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
//UsersTypes
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
    isFetching: boolean
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

let store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store