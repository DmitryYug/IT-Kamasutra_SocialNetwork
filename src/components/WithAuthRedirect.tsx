import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {RootsStateType} from '../redux/redux-store'


type MapStateToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootsStateType) => {
    return {
        isAuth: state.authPage.isAuth
    }
}


export const WithAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<MapStateToPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}
