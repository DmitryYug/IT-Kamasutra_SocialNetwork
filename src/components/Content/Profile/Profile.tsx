import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePagePropsType = {
    store: any
}

export const Profile:React.FC<ProfilePagePropsType> = ({store}) => {
    return(
        <div>
            <ProfileInfo />
            <MyPostsContainer
                store={store}
            />
        </div>
    )
}