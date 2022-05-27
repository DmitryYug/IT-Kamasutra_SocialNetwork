import {v1} from "uuid";
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
export type StoreType = {
    _state: RootsStateType
    _renderEntireTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootsStateType
    dispatch: (action: any) => void
}

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: '',
//             posts: [
//                 {id: v1(), message: 'first post', likes: 4},
//                 {id: v1(), message: 'second post', likes: 45},
//                 {id: v1(), message: 'surprise mtf', likes: 12}
//             ],
//         },
//         dialogsPage: {
//             newMessageText: '',
//             dialogs: [
//                 {id: v1(), name: 'Dmitry', path: '1'},
//                 {id: v1(), name: 'Max', path: '2'},
//                 {id: v1(), name: 'Denis', path: '3'},
//                 {id: v1(), name: 'Incubator', path: '4'}
//             ],
//             messages: [
//                 {id: v1(), message: 'Hey'},
//                 {id: v1(), message: 'Whats upp'},
//                 {id: v1(), message: 'How is your incubator'},
//                 {id: v1(), message: 'React is easy'}
//             ]
//         }
//     },
//     _renderEntireTree () {
//         console.log('rendered')
//     },
//
// //Dont change state
//     getState () {
//         return this._state
//     },
//     subscriber (observer: () => void) {
//         this._renderEntireTree = observer
//     },
//
//     dispatch (action: any) {
//         this._state.profilePage = profileReducer(store._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(store._state.dialogsPage, action)
//         this._renderEntireTree()
//     }
//
//
// }