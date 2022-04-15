
export type RootsStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPagePropsType
}


export type ProfilePagePropsType = {
    posts: Array<PostPropsType>
}
export type PostPropsType = {
    message: string,
    likes: number
}


export type DialogsPagePropsType = {
    dialogs: Array<PropsDialogItemType>,
    messages: Array<PropsMessageItemType>
}
export type PropsMessageItemType = {
    message: string
}
export type PropsDialogItemType = {
    name: string,
    path: string
}


let state: RootsStateType = {
    profilePage: {
        posts: [
            {message: 'first post', likes: 4},
            {message: 'second post', likes: 45},
            {message: 'surprise mtf', likes: 12}
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