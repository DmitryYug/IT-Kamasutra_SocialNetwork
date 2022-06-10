import React, {ChangeEvent} from "react";
import classes from "../MyPosts.module.css";

type PostAddFormProps = {
    addPostOnClick: () => void,
    addPostOnChange: (currentPostText: string) => void
    newPostTitle: string
}

export const PostAddForm: React.FC<PostAddFormProps> = (
    {addPostOnClick, addPostOnChange, newPostTitle}) => {

    const addPostOnClickHandler = () => {
        addPostOnClick()
    }
    const addPostOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let currentText = e.currentTarget.value
        addPostOnChange(currentText)
    }
    return (
        <>
            <h2 className={classes.item}>
                My posts
            </h2>
            <div>
                    <textarea
                        value={newPostTitle}
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

