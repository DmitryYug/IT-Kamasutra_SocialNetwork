import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export function MyPosts () {
    return (
        <>
            <div className={classes.item}>
                my posts
            </div>
            <input type="new post"/>
            <button>Add post</button>
            <Post message='first post' likes={4}/>
            <Post message='second post' likes={100}/>
            <Post message='surprise mtf' likes={7}/>
        </>
    )
}