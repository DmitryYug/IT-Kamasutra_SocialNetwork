import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostAddForm} from "./PostAddForm/PostAddForm";
import {PostItemType} from "../../../../redux/redux-store";
import {PostAddFormWithUI} from "./PostAddForm/PostAddFormWithUI";
import {PostWithUI} from "./Post/PostWithUI";


type MyPostsPropsType = {
    posts: Array<PostItemType>,
    newPostTitle: string,
    addPostOnClick: () => void,
    addPostOnChange: (currentPostText: string) => void,
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {addPostOnClick, addPostOnChange, posts, newPostTitle}
) => {

//Elements
    const postItems = posts.map(p => {
        return (
            <PostWithUI
                key={p.id}
                id={p.id}
                message={p.message}
                likes={p.likes}
            />
        )
    })

    return (
        <div className={classes.postAreaWrapper}>
            <PostAddFormWithUI
                addPostOnClick={addPostOnClick}
                addPostOnChange={addPostOnChange}
                newPostTitle={newPostTitle}
            />
            <div>
                {postItems}
            </div>
        </div>
    )
}

