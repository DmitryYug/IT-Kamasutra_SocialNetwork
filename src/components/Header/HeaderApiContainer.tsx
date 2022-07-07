import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {setAuthData, MyLoginDataType} from '../../redux/auth-reducer'
import {RootsStateType} from '../../redux/redux-store'
import {HeaderWithUI} from './HeaderWithUI'

export type HeaderApiContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isFetching: boolean
    userLogin: string | null
}
type MapDispatchToPropsType = {
    setAuthData: (myLoginData: MyLoginDataType) => void
}

export class HeaderApiContainer extends React.Component<HeaderApiContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    console.log(response.data.resultCode)
                    this.props.setAuthData(response.data.data)
                }
            })
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

export const HeaderContainer = connect(mapStateToProps, {setAuthData})(HeaderApiContainer)