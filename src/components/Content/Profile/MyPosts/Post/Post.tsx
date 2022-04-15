import React from "react";
import classes from "./Post.module.css";
import  {PostPropsType} from "../../../../../redux/state";

//Components
const Avatar = () => {
    return (
        <div className={classes.item}>
            <img src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg"/>
        </div>
    )
}

const PostItem = (props: any) => {
    return (
        <div>
            <div>
                {props.message}
            </div>
            <div>
                {props.likes} people liked it
            </div>
        </div>
)
}

export function Post (props: PostPropsType) {
    return (
        <div className={classes.postItemWrapper}>
            <Avatar/>
            <PostItem
                message={props.message}
                likes={props.likes}
            />
        </div>
    )
}