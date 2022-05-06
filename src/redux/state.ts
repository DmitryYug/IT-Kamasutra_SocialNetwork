import {renderEntireTree} from "../render";
import {v1} from "uuid";

export type PostItemType = {
    id: string,
    message: string,
    likes: number
}
export type ProfilePageType = {
    newPostTitle: string
    posts: Array<PostItemType>
}
export type MessageItemType = {
    message: string
}
export type DialogItemType = {
    name: string,
    path: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemType>,
    messages: Array<MessageItemType>
}
export type RootsStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export function addPost (newPostValue: string) {
    let newPost: PostItemType = {id: v1(), message: newPostValue, likes: 0}
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export function changeNewPostText (newText: string) {
    state.profilePage.newPostTitle = newText
    renderEntireTree(state)
}



let state: RootsStateType = {
    profilePage: {
        newPostTitle: '',
        posts: [
            {id: v1(), message: 'first post', likes: 4},
            {id: v1(), message: 'second post', likes: 45},
            {id: v1(), message: 'surprise mtf', likes: 12}
        ],
    },
    dialogsPage: {
        dialogs: [
            {name: 'Dmitry', path: '1'},
            {name: 'Max', path: '2'},
            {name: 'Denis', path: '3'},
            {name: 'Incubator', path: '4'}
        ],
        messages: [
            {message: 'Hey'},
            {message: 'Whats upp'},
            {message: 'How is your incubator'},
            {message: 'React is easy'}
        ]
    }
}

export default state