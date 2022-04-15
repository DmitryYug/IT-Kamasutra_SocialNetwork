import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../../redux/state";


export function Profile (props: ProfilePagePropsType) {
    return(
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
            />
        </div>
    )
}