import React, {ChangeEvent} from "react";
import classes from "../MyPosts.module.css";
import {Button, TextField} from "@mui/material";

type PostAddFormProps = {
    addPostOnClick: () => void,
    addPostOnChange: (currentPostText: string) => void
    newPostTitle: string
}

export const PostAddFormWithUI: React.FC<PostAddFormProps> = (
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
                <TextField
                    id="outlined-basic"
                    label="Type new post here"
                    variant="outlined"
                    value={newPostTitle}
                    onChange={addPostOnChangeHandler}

                />
            </div>
            <div>
                <Button
                    sx={{margin: '10px 0 0 0'}}
                    variant="contained"
                    onClick={addPostOnClickHandler}
                >
                    Add post
                </Button>
            </div>
        </>
    )
}

