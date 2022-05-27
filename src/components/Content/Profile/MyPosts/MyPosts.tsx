import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostItemType} from "../../../../redux/store";
import {PostAddForm} from "./PostAddForm/PostAddForm";


type MyPostsPropsType = {
    addPostOnClick: () => void,
    addPostOnChange: (currentPostText: string) => void,
    posts: Array<PostItemType>,
    newPostTitle: string
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {addPostOnClick, addPostOnChange, posts, newPostTitle}) => {

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

