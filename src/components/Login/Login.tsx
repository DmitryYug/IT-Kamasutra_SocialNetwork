import React from "react";

// type LoginPropsType = {
//     isAuth: boolean
// }


export const Login = () => {
    return (
    // if (!props.isAuth)
    <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Sign in</h2>
            <input style={{width: '40%'}} type="login"/>
            <input style={{width: '40%'}} type="password"/>
        </div>
    )
}


// export const LoggedIn = () =>
