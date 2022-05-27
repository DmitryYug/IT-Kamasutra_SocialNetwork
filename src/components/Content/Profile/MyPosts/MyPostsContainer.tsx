import React, {ChangeEvent} from "react";
import {AddPostAC, ChangePostAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    store: any
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const {posts, newPostText} = props.store.getState().profileReducer

    const addPostOnClick = () => {
        props.store.dispatch(AddPostAC())
    }
    const addPostOnChange = (currentPostText: string) => {
        props.store.dispatch(ChangePostAC(currentPostText))
    }

    return (
        <MyPosts
            addPostOnClick={addPostOnClick}
            addPostOnChange={addPostOnChange}
            posts={posts}
            newPostTitle={newPostText}
        />
    )
}