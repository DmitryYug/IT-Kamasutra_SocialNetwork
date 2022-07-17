import React from "react";
import { useSelector } from "react-redux";
import { AuthPageType } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";

// type LoginPropsType = {
//     isAuth: boolean
// }


export const Login = () => {
    
    let authState = useSelector<AppRootStateType, AuthPageType>(state => state.authPage)
    return (
    authState.isAuth 
        ? <div><h2>Logged in</h2></div>
        : <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Sign in</h2>
            <input style={{width: '40%'}} type="login"/>
            <input style={{width: '40%'}} type="password"/>
        </div>
    )
}


// export const LoggedIn = () =>
