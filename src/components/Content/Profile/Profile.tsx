import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import { ProfileContainerPropsType } from "./ProfileContainer";
import { ProfileItemType } from "../../../redux/redux-store";


type ProfilePropsType = {
    userId: number,
    profile: ProfileItemType | null
}
       

export const Profile = (props: ProfilePropsType) => {
  
    console.log(props)
    
    return(
        <div>
            <ProfileInfo 
                profile={props.profile}
            />
            <MyPostsContainer/>
        </div>
    )
}


