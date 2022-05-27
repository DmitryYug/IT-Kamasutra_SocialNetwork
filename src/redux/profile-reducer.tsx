import {v1} from "uuid";
import {PostItemType, ProfilePageType} from "./store";

let initialProfilePageState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'first post', likes: 4},
        {id: v1(), message: 'second post', likes: 45},
        {id: v1(), message: 'surprise mtf', likes: 12}
    ],
}

export const profileReducer = (state = initialProfilePageState, action: any) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostItemType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newPostValue
            return state
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const changePostAC = (currentText: string) => ({
    type: 'CHANGE-NEW-POST-TEXT',
    newPostValue: currentText
})
