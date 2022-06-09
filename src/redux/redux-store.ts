import {combineReducers, createStore} from "redux";
import {AddPostAC, ChangePostAC, profileReducer} from "./profile-reducer";
import {AddMessageAC, ChangeMessageAC, dialogsReducer} from "./dialogs-reducer";

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
}


// type AddPostACType = ReturnType<typeof AddPostAC>
// type ChangePostACType = ReturnType<typeof ChangePostAC>
// type AddMessageACType = ReturnType<typeof AddMessageAC>
// type ChangeMessageACType = ReturnType<typeof ChangeMessageAC>


// export type AllActionTypes = AddPostACType
//     | ChangePostACType
//     | AddMessageACType
//     | ChangeMessageACType

// export type StoreType = {
//     _state: RootsStateType
//     _renderEntireTree: () => void
//     subscriber: (observer: () => void) => void
//     getState: () => RootsStateType
//     dispatch: (action: any) => void
// }



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(rootReducer)

export type  AppRootStateType = ReturnType<typeof rootReducer>


export default store