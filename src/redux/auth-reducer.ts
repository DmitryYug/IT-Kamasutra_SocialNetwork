import {
    Dispatch
} from "../../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";
import { authMeAPI } from "../api/api";


export type MyLoginDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
}
export type AuthPageType = {
    myLoginData: MyLoginDataType
    isFetching: boolean
    isAuth: boolean
}

type setAuthDataACType = ReturnType<typeof setAuthData>

type AuthReducerTypes = setAuthDataACType

let initialAuthState: AuthPageType = {
    myLoginData: {
        id: null,
        email: null,
        login: null
    },
    isFetching: false,
    isAuth: false
}


export const authReducer =
    (state: AuthPageType = initialAuthState, action: AuthReducerTypes): any => {
        switch (action.type) {
            case "SET-AUTH-DATA": 
                return {
                    ...state,
                    myLoginData: action.myLoginData,
                    isAuth: true
                }
            default:
                return state
        }
    }
    
    
export const setAuthData = (myLoginData: MyLoginDataType) => {
    return {
        type: 'SET-AUTH-DATA',
        myLoginData
    } as const
}


export const authMe = () => {
    return (dispatch: Dispatch<setAuthDataACType>) => {
        authMeAPI().then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthData(data.data))
                }
            }
        )
    }
}