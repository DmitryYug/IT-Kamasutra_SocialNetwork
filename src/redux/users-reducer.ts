import { v1 } from "uuid"

type PhotoType = {
    small: string
    large: string
}
// type LocationType = {
//     country: string,
//     city: string
// }
export type UsersType = {
    id: string,
    followed: boolean,
    name: string,
    // location: LocationType,
    status: string
    // avatar: string
    photos: PhotoType
}
type FollowToggleACType = ReturnType <typeof FollowToggleAC>
type SetUsersACType = ReturnType <typeof SetUsersAC>
type UsersReducerTypes = FollowToggleACType | SetUsersACType

let initialUsersState: Array<UsersType> = []


export const usersReducer =
    (state: Array<UsersType> = initialUsersState, action: UsersReducerTypes): any => {
    switch (action.type) {
        case "FOLLOW-TOGGLE":
            let currentUser = state.find(user => user.id === action.userId)
            if (currentUser) {
                currentUser.followed = !currentUser.followed
            }
            return [...state]
        case "SET-USERS":
            return [...state, ...action.users]
        default:
            return state
    }
}

export const FollowToggleAC = (userId: string) => {
    return {
        type: 'FOLLOW-TOGGLE',
        userId: userId
    } as const
}
export const SetUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}