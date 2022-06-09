import React from "react";
import {AddPostAC, ChangePostAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {PostItemType, RootsStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToProps = {
    posts: Array<PostItemType>
    newPostTitle: string
}
type MapDispatchToProps = {
    addPostOnClick: () => void
    addPostOnChange: (currentPostText: string) => void
}

let mapStateToProps = (state: RootsStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostTitle: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPostOnClick: () => {
            dispatch(AddPostAC())
        },
        addPostOnChange: (currentPostText: string) => {
            dispatch(ChangePostAC(currentPostText))
        }

    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
