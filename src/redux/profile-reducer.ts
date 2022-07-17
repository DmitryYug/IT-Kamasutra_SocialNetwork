import {v1} from "uuid";
import {PostItemType, ProfileItemType, ProfilePageType} from "./redux-store";
import {
    Dispatch
} from "../../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";
import { getUserProfileAPI } from "../api/api";


// let initialProfile: ProfileItemType  = {
//     aboutMe: 'super star',
//     contacts: {
//         facebook: null,
//         github: null,
//         instagram: null,
//         mainLink: null,
//         twitter: null,
//         vk: null,
//         website: null,
//         youtube: null
//     }
//     fullName:
//     lookingForAJob:
//     lookingForAJobDescription:
//     photos: {large: any, small: any}
//     userId:
// }

type AddPostACType = ReturnType<typeof addPost>
type ChangePostACType = ReturnType<typeof changePost>
type SetProfileACType = ReturnType<typeof setProfile>
type ProfileReducerTypes = AddPostACType
    | ChangePostACType
    | SetProfileACType


let initialProfilePageState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'first post', likes: 4},
        {id: v1(), message: 'second post', likes: 45},
        {id: v1(), message: 'surprise mtf', likes: 12}
    ],
    profile: null
}

export const profileReducer =
    (state = initialProfilePageState, action: ProfileReducerTypes): ProfilePageType => {
        switch (action.type) {
            case "ADD-POST":
                let newPost: PostItemType = {id: v1(), message: state.newPostText, likes: 0}
                return {
                    ...state,
                    newPostText: '',
                    posts: [newPost, ...state.posts]
                }
            case 'CHANGE-NEW-POST-TEXT':
                return {
                    ...state,
                    newPostText: action.newPostValue
                }
            case "SET-PROFILE":
                if (action.profile) {
                    return {
                        ...state,
                        profile: action.profile
                    }
                }
                return {...state}
            default:
                return state
        }
    }

export const addPost = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const changePost = (newPostValue: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newPostValue
    } as const
}
export const setProfile = (profile: ProfileItemType) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<SetProfileACType>) => {
        getUserProfileAPI(userId).then(data => dispatch(setProfile(data)))
    }
}