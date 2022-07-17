import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileContainerPropsType } from "./ProfileContainer";
import { ProfileItemType } from "../../../redux/redux-store";
import { Redirect } from "react-router-dom";


type ProfilePropsType = {
    profile: ProfileItemType | null
    isAuth: boolean
}
       

export const Profile = (props: ProfilePropsType) => {
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return(
        <div>
            <ProfileInfo 
                profile={props.profile}
            />
            <MyPostsContainer/>
        </div>
    )
}


