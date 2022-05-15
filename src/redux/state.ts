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
    _renderEntireTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootsStateType
    dispatch: (action: any) => void
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
    _renderEntireTree () {
        console.log('rendered')
    },

//Dont change state
    getState () {
        return this._state
    },
    subscriber (observer: () => void) {
        this._renderEntireTree = observer
    },

    dispatch (action: any) {
        if (action.type === "ADD-POST") {
            let newPost: PostItemType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderEntireTree()
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostValue
            this._renderEntireTree()
        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._renderEntireTree()
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this._state.dialogsPage.messages.push({message: this._state.dialogsPage.newMessageText})
            this._state.dialogsPage.newMessageText = ''
            this._renderEntireTree()
        }
    }


}