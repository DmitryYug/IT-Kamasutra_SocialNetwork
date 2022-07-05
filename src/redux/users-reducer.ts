import { v1 } from "uuid"
import { UsersPageType, UsersType } from "./redux-store"



type FollowToggleACType = ReturnType <typeof FollowToggleAC>
type SetUsersACType = ReturnType <typeof SetUsersAC>
type SetUsersPagesACType = ReturnType <typeof SetCurrentPageAC>
type SetTotalUsersCountACType = ReturnType <typeof SetTotalUsersCountAC>
type UsersReducerTypes = 
    FollowToggleACType
    | SetUsersACType
    | SetUsersPagesACType
    | SetTotalUsersCountACType

let initialUsersState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1
}


export const usersReducer =
    (state: UsersPageType  = initialUsersState, action: UsersReducerTypes): any => {
    switch (action.type) {
        case "FOLLOW-TOGGLE":
            let currentUser = state.users.find(user => user.id === action.userId)
            if (currentUser) {
                currentUser.followed = !currentUser.followed
            }
            return {
                ...state,
                users: [...state.users]
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, 
                currentPage: action.pageNumber
            }
        case "SET-TOTAL-USERS":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
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
export const SetCurrentPageAC = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        pageNumber
    } as const
}
export const SetTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS',
        totalUsersCount
    } as const 
}
