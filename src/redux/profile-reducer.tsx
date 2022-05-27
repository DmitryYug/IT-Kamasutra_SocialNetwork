import {v1} from "uuid";
import {PostItemType} from "./store";

export const profileReducer = (state: any, action: any) => {
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
    return{
        type: "ADD-POST"
    } as const
}
export const changePostAC = (currentText: string) => ({
    type: 'CHANGE-NEW-POST-TEXT',
    newPostValue: currentText
})
