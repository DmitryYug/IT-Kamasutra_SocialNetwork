import {v1} from "uuid";
import {
    Dispatch
} from "../../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";
import {getUserProfileAPI} from "../api/api";

//ProfileTypes
export type ProfileItemType = {
    aboutMe: string
    contacts: {
        facebook: string
        github: string
        instagram: string
        mainLink: string
        twitter: string
        vk: string
        website: string
        youtube: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { large: any, small: any }
    userId: number
}
export type PostItemType = {
    id: string,
    message: string,
    likes: number
}
export type ProfilePageType = {
    newPostText: string
    newStatusText: string
    posts: Array<PostItemType>
    profile: ProfileItemType | null
}

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
type SetStatusACType = ReturnType<typeof setStatus>
type ProfileReducerTypes = AddPostACType
    | ChangePostACType
    | SetProfileACType
    | SetStatusACType


let initialProfilePageState: ProfilePageType = {
    newPostText: '',
    newStatusText: 'how is your mood?',
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
            case "SET-STATUS":
                return {
                    ...state,
                    newStatusText: action.newStatusText
                }
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
export const setStatus = (newStatusText: string) => {
    return {
        type: 'SET-STATUS',
        newStatusText
    } as const
}


export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<SetProfileACType>) => {
        getUserProfileAPI(userId).then(data => dispatch(setProfile(data)))
    }
}