import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {Dispatch} from "redux";
import {setProfile} from "../../../redux/profile-reducer";
import {ProfileItemType, RootsStateType} from "../../../redux/redux-store";
import {Profile} from "./Profile";


type MapStateToPropsType = {
    // userId: number
    profile: ProfileItemType | null
}
type MapDispatchToPropsType = {
    setProfile: (profile: ProfileItemType) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type PathParamsType = {
    userId: string
}
type ProfileWithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

//Api
class ProfileApiContainer extends React.Component<ProfileWithRouterPropsType> {
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        )
            .then(response => {
                this.props.setProfile(response.data)
            })
    }
    render() {
        console.log(this.props)
        return (
            <Profile
                // userId={this.props.userId}
                profile={this.props.profile}
            />
        )
    }
}

//Connect


let mapStateToProps = (state: RootsStateType): MapStateToPropsType => {
    return {
        // userId: 10,
        profile: state.profilePage.profile
    }
}

const ProfileWithRouter = withRouter(ProfileApiContainer)
export const ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileWithRouter)
