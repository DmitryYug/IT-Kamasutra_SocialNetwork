import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostAddForm} from "./PostAddForm/PostAddForm";
import {PostItemType} from "../../../../redux/redux-store";


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
            <Post
                key={p.id}
                id={p.id}
                message={p.message}
                likes={p.likes}/>
        )
    })

    return (
        <div className={classes.postAreaWrapper}>
            <PostAddForm
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

