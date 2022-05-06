import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostItemType} from "../../../redux/state";


type ProfilePagePropsType = {
    newPostTitle: string
    addPost: (newPostTitle: string) => void
    changeNewPostText: (newPostValue: string) => void
    posts: Array<PostItemType>
}


export const Profile:React.FC<ProfilePagePropsType> = (
    {posts, newPostTitle, addPost, changeNewPostText}) => {
    return(
        <div>
            <ProfileInfo />
            <MyPosts
                newPostTitle={newPostTitle}
                addPost={addPost}
                changeNewPostText={changeNewPostText}
                posts={posts}
            />
        </div>
    )
}