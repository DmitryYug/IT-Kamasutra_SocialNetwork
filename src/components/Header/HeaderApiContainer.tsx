import React from 'react'
import {connect} from 'react-redux'
import {setAuthData, MyLoginDataType, authMe} from '../../redux/auth-reducer'
import {RootsStateType} from '../../redux/redux-store'
import {HeaderWithUI} from './HeaderWithUI'

export type HeaderApiContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isFetching: boolean
    userLogin: string | null
}
type MapDispatchToPropsType = {
    authMe: () => void
}

export class HeaderApiContainer extends React.Component<HeaderApiContainerPropsType> {

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <HeaderWithUI
                isFetching={this.props.isFetching}
                userLogin={this.props.userLogin}
            />
        )
    }
}
let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        isFetching: state.authPage.isFetching,
        userLogin: state.authPage.myLoginData.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {authMe})(HeaderApiContainer)