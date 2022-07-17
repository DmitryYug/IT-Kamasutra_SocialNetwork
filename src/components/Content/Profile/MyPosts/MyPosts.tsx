import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {PostAddForm} from "./PostAddForm/PostAddForm";
import {PostAddFormWithUI} from "./PostAddForm/PostAddFormWithUI";
import {PostWithUI} from "./Post/PostWithUI";
import { MyAddItemField } from "../../../MyUiComponents/MyAddItemField/MyAddItemField";
import { PostItemType } from "../../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostItemType>,
    newPostTitle: string,
    addPost: () => void,
    changePost: (currentPostText: string) => void,
}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {addPost, changePost, posts, newPostTitle}
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
            <MyAddItemField
                value={newPostTitle}
                labelText={'type new post'}
                errorLabelText={'should be smth'}
                onClickCallback={addPost}
                onChangeCallback={changePost}
                onKeyPressCallback={addPost}
            />
            <div>
                {postItems}
            </div>
        </div>
    )
}

