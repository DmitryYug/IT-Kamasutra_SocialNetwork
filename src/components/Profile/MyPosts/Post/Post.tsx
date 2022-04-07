import React from "react";
import classes from "./Post.module.css";



export function Post (props: any) {
    const {message, likes} = props
    return (
        <>
            <div className={classes.item}>
                <img src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg"/>
            </div>
            <div>
                {message}
            </div>
            <div>
                {likes} people liked it
            </div>
        </>
    )
}