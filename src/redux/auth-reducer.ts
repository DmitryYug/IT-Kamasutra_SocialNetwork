

export type MyLoginDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
}
export type AuthPageType = {
    myLoginData: MyLoginDataType
    isFetching: boolean
}

type setAuthDataACType = ReturnType<typeof setAuthData>

type AuthReducerTypes = setAuthDataACType

let initialAuthState: AuthPageType = {
    myLoginData: {
        id: null,
        email: null,
        login: null
    },
    isFetching: false
}


export const authReducer =
    (state: AuthPageType = initialAuthState, action: AuthReducerTypes): any => {
        switch (action.type) {
            case "SET-AUTH-DATA": 
                return {
                    ...state,
                    myLoginData: action.myLoginData
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
