import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Dispatch} from "redux";
import {getUserProfileAPI} from "../../../api/api";
import {getUserProfile, setProfile} from "../../../redux/profile-reducer";
import {ProfileItemType, RootsStateType} from "../../../redux/redux-store";
import { WithAuthRedirect } from "../../WithAuthRedirect";
import {Profile} from "./Profile";


type MapStateToPropsType = {
    profile: ProfileItemType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfileWithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

//Api
class ProfileApiContainer extends React.Component<ProfileWithRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile
                isAuth={this.props.isAuth}
                profile={this.props.profile}/>
        )
    }
}

//Connect
let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.authPage.isAuth
    }
}

const ProfileWithRouter = withRouter(ProfileApiContainer)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(ProfileWithRouter)
export const WithAuthRedirectProfileContainer = WithAuthRedirect(ProfileContainer)
