import { Dispatch } from "react"
import {v1} from "uuid"
import {followAPI, getUsersAPI, unFollowAPI } from "../api/api"

export type UsersType = {
    name: string,
    id: string,
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean,
    isFollowDisabled: boolean
}
export type UsersPageType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    // isFollowDisabled: boolean
}


type FollowToggleACType = ReturnType<typeof followToggle>
type SetUsersACType = ReturnType<typeof setUsers>
type SetUsersPagesACType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type IsFetchingToggleACType = ReturnType<typeof isFetchingToggle>
type isFollowDisabledToggleACType = ReturnType<typeof isFollowDisabledToggle>
type UsersReducerTypes =
    FollowToggleACType
    | SetUsersACType
    | SetUsersPagesACType
    | SetTotalUsersCountACType
    | IsFetchingToggleACType
    | isFollowDisabledToggleACType

let initialUsersState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    // isFollowDisabled: false
}


export const usersReducer =
    (state: UsersPageType = initialUsersState, action: UsersReducerTypes): any => {
        switch (action.type) {
            case "FOLLOW-TOGGLE":
                let currentUser = state.users.find(user => user.id === action.payload.userId)
                if (currentUser) {
                    currentUser.followed = action.payload.isChecked
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
            case "IS-FOLLOW-DISABLED":
                let currUser = state.users.find(u => u.id === action.payload.userId)
                if (currUser) {
                    currUser.isFollowDisabled = action.payload.isFollowDisabled
                }
                return {
                    ...state,
                    users: [...state.users]
                }
            default:
                return state
        }
    }

export const followToggle = (userId: string, isChecked: boolean) => {
    return {
        type: 'FOLLOW-TOGGLE',
        payload: {userId, isChecked, }
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
export const isFollowDisabledToggle = (userId: string, isFollowDisabled: boolean) => {
    return {
        type: 'IS-FOLLOW-DISABLED', 
        payload: {userId, isFollowDisabled}
    } as const
}


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch <IsFetchingToggleACType | SetUsersACType | SetTotalUsersCountACType>) => {
        dispatch(isFetchingToggle(true))
        getUsersAPI(currentPage, pageSize)
            .then(data => {
                dispatch(isFetchingToggle(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const onFollow = (userId: string, isChecked: boolean) => {
    return (dispatch: Dispatch <isFollowDisabledToggleACType | FollowToggleACType>) => {
        dispatch(isFollowDisabledToggle(userId, true))
        if (isChecked) {
            followAPI(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followToggle(userId, true))
                    dispatch(isFollowDisabledToggle(userId, false))
                }
            })
        } else {
            unFollowAPI(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followToggle(userId, false))
                    dispatch(isFollowDisabledToggle(userId, false))
                }
            })
        }
    }
}

