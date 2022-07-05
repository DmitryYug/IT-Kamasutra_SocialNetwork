import {v1} from "uuid"
import {UsersPageType, UsersType} from "./redux-store"


type FollowToggleACType = ReturnType<typeof followToggle>
type SetUsersACType = ReturnType<typeof setUsers>
type SetUsersPagesACType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type IsFetchingToggleACType = ReturnType<typeof isFetchingToggle>
type UsersReducerTypes =
    FollowToggleACType
    | SetUsersACType
    | SetUsersPagesACType
    | SetTotalUsersCountACType
    | IsFetchingToggleACType

let initialUsersState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
}


export const usersReducer =
    (state: UsersPageType = initialUsersState, action: UsersReducerTypes): any => {
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
            case "IS-FETCHING-TOGGLE":
                return {
                    ...state, 
                    isFetching: action.isFetching
                }
            default:
                return state
        }
    }

export const followToggle = (userId: string) => {
    return {
        type: 'FOLLOW-TOGGLE',
        userId: userId
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        pageNumber
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS',
        totalUsersCount
    } as const
}
export const isFetchingToggle = (isFetching: boolean) => {
    return {
        type: 'IS-FETCHING-TOGGLE',
        isFetching
    } as const
}
