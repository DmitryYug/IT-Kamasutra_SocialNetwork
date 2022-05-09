import {v1} from "uuid";

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
    message: string
}
export type DialogItemType = {
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
    addPost: (newPostValue: string) => void
    changeNewPostText: (newPostValue: string) => void
    changeNewMessageText: (newMessage: string) => void
    addNewMessage: (newMessage: string) => void
    renderEntireTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootsStateType
}

export let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: v1(), message: 'first post', likes: 4},
                {id: v1(), message: 'second post', likes: 45},
                {id: v1(), message: 'surprise mtf', likes: 12}
            ],
        },
        dialogsPage: {
            newMessageText: '',
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
    },
    addPost (newPostValue: string) {
        let newPost: PostItemType = {id: v1(), message: newPostValue, likes: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.renderEntireTree()
    },
    changeNewPostText (newPostValue: string) {
        this._state.profilePage.newPostText = newPostValue
        this.renderEntireTree()
    },
    changeNewMessageText (newMessage: string) {
        // this.state.dialogsPage.newMessageText = newMessage
        console.log(newMessage)
        this._state.dialogsPage.newMessageText = newMessage
        this.renderEntireTree()
    },
    addNewMessage (newMessage: string) {
        this._state.dialogsPage.messages.push({message: newMessage})
        this._state.dialogsPage.newMessageText = ''
        this.renderEntireTree()
    },
    renderEntireTree () {
        console.log('rendered')
    },
    subscriber (observer: () => void) {
        this.renderEntireTree = observer
    },
    getState () {
        return this._state
    }
}