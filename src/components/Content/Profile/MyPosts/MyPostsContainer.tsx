import React from "react";
import {addPost, changePost, PostItemType} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import { RootsStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {MyPosts} from "../../../../components/Content/Profile/MyPosts/MyPosts";

type MapStateToProps = {
    posts: Array<PostItemType>
    newPostTitle: string
}
type MapDispatchToProps = {
    addPost: () => void
    changePost: (currentPostText: string) => void
}

let mapStateToProps = (state: RootsStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostTitle: state.profilePage.newPostText
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, changePost})(MyPosts)
