import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose, Dispatch} from "redux";
import {getUserProfileAPI} from "../../../api/api";
import {getUserProfile, ProfileItemType, setProfile, setStatus} from "../../../redux/profile-reducer";
import { RootsStateType} from "../../../redux/redux-store";
import { WithAuthRedirect } from "../../WithAuthRedirect";
import {Profile} from "./Profile";


type MapStateToPropsType = {
    newStatusText: string
    profile: ProfileItemType | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    setStatus: (newStatusText: string) => void
}
type PathParamsType = {
    userId: string
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileWithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileApiContainer extends React.Component<ProfileWithRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile
                newStatusText={this.props.newStatusText}
                setStatus={this.props.setStatus}
                profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        newStatusText: state.profilePage.newStatusText
    }
}


export default compose(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile, setStatus})
)(ProfileApiContainer)
