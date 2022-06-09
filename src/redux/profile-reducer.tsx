import {v1} from "uuid";
import {PostItemType, ProfilePageType} from "./redux-store";


type AddPostACType = ReturnType<typeof AddPostAC>
type ChangePostACType = ReturnType<typeof ChangePostAC>
type ProfileReducerTypes = AddPostACType | ChangePostACType


let initialProfilePageState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'first post', likes: 4},
        {id: v1(), message: 'second post', likes: 45},
        {id: v1(), message: 'surprise mtf', likes: 12}
    ],
}

export const profileReducer =
    (state = initialProfilePageState, action: ProfileReducerTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostItemType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return {...state}
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newPostValue
            return {...state}
        default:
            return state
    }
}

export const AddPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const ChangePostAC = (currentText: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newPostValue: currentText
    } as const
}
