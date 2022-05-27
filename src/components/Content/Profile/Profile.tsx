import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostItemType} from "../../../redux/store";


type ProfilePagePropsType = {
    newPostTitle: string
    posts: Array<PostItemType>
    dispatch: (action: any) => void
}


export const Profile:React.FC<ProfilePagePropsType> = (
    {posts, newPostTitle, dispatch}) => {
    return(
        <div>
            <ProfileInfo />
            <MyPosts
                newPostTitle={newPostTitle}
                posts={posts}
                dispatch={dispatch}
            />
        </div>
    )
}