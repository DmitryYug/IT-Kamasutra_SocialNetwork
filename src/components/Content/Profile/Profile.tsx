import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileContainerPropsType } from "./ProfileContainer";
import { Redirect } from "react-router-dom";
import { ProfileItemType } from "../../../redux/profile-reducer";

type ProfilePropsType = {
    newStatusText: string
    setStatus: (newStatusText: string) => void
    profile: ProfileItemType | null
}

export const Profile = (props: ProfilePropsType) => {
    return(
        <div>
            <ProfileInfo
                newStatusText={props.newStatusText}
                setStatus={props.setStatus}
                profile={props.profile}
            />
            <MyPostsContainer/>
        </div>
    )
}


