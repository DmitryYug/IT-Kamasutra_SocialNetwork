import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostItemType} from "../../../../redux/state";


type ProfilePagePropsType = {
    newPostTitle: string
    posts: Array<PostItemType>
    dispatch: (action: any) => void
}
export const MyPosts:React.FC<ProfilePagePropsType> = (
    {posts, newPostTitle, dispatch}) => {

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
                dispatch={dispatch}
            />
            <div>
                {postItems}
            </div>
        </div>
    )
}


//Local components
    type PostAddFormProps = {
        newPostTitle: string
        dispatch: (action: any) => void
    }
    const PostAddForm = (props: PostAddFormProps) => {

        const addPostOnClickHandler = () => {
            props.dispatch({type: "ADD-POST"})
        }
        const addPostOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let currentText = e.currentTarget.value
            props.dispatch({
                type: 'CHANGE-NEW-POST-TEXT',
                newPostValue: currentText
            })
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

