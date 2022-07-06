import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {Dispatch} from "redux";
import {setProfile} from "../../../redux/profile-reducer";
import {ProfileItemType, RootsStateType} from "../../../redux/redux-store";
import {Profile} from "./Profile";

//Api
class ProfileApiContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
        )
            .then(response => {
                this.props.setProfile(response.data)
            })
    }
    render() {
        return (
            <Profile
                userId={this.props.userId}
                profile={this.props.profile}
            />
        )
    }
}
//Connect
type MapStateToPropsType = {
    userId: number
    profile: ProfileItemType | null
}
type MapDispatchToPropsType = {
    setProfile: (profile: ProfileItemType) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        userId: 10,
        profile: state.profilePage.profile
    }
}

let ProfileRouted = withRouter(ProfileApiContainer)
export const ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileRouted)
