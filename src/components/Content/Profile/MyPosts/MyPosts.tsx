import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostItemType} from "../../../../redux/state";


type ProfilePagePropsType = {
    newPostTitle: string
    addPost: (newPostTitle: string) => void
    changeNewPostText: (newPostValue: string) => void
    posts: Array<PostItemType>
}
export const MyPosts:React.FC<ProfilePagePropsType> = (
    {posts, newPostTitle, addPost, changeNewPostText}) => {

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
                newPostTitle={newPostTitle}
                addPost={addPost}
                changeNewPostText={changeNewPostText}
            />
            <div>
                {postItems}
            </div>
        </div>
    )
}


//Local components
    type PostAddFormProps = {
        addPost: (newPostTitle: string) => void
        changeNewPostText: (newPostValue: string) => void
        newPostTitle: string
    }
    const PostAddForm = (props: PostAddFormProps) => {

        const addPostOnClickHandler = () => {
            props.addPost(props.newPostTitle)
        }
        const addPostOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let newPostValue = e.currentTarget.value
            props.changeNewPostText(newPostValue)
        }
        return (
            <>
                <h2 className={classes.item}>
                    My posts
                </h2>
                <div>
                    <textarea
                        value={props.newPostTitle}
                        onChange={addPostOnChangeHandler}
                    >
                    </textarea>
                </div>
                <div>
                    <button
                        className={classes.addPostBtn}
                        onClick={addPostOnClickHandler}
                    >
                        Add post
                    </button>
                </div>
            </>
        )
    }

