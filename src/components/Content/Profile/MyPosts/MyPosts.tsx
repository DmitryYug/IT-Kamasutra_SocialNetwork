import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePagePropsType} from "../../../../redux/state";



//Components
const PostAddForm = () => {
    return (
        <>
            <h2 className={classes.item}>
                My posts
            </h2>
            <div>
                <textarea placeholder='new post'></textarea>
            </div>
            <div>
                <button className={classes.addPostBtn}>Add post</button>
            </div>
        </>
    )
}

export function MyPosts(props: ProfilePagePropsType) {

    //Rendered Items
    const postItems = props.posts.map(p => {
        return (
            <Post
                message={p.message}
                likes={p.likes}/>
        )
    })

    return (
        <div className={classes.postAreaWrapper}>
            <PostAddForm/>
            <div>
                {postItems}
            </div>
        </div>
    )
}