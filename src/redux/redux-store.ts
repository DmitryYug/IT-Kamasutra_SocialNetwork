import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

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
    newMessageText: string
    dialogs: Array<DialogItemType>,
    messages: Array<MessageItemType>
}
export type RootsStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

// export type StoreType = {
//     _state: RootsStateType
//     _renderEntireTree: () => void
//     subscriber: (observer: () => void) => void
//     getState: () => RootsStateType
//     dispatch: (action: any) => void
// }



let reducersPackage = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducersPackage)

export type  AppRootStateType = ReturnType<typeof reducersPackage>


export default store