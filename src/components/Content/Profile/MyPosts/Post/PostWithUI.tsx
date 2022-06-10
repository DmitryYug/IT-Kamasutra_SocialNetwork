import React from "react";
import classes from "./Post.module.css";
import {PostItemType} from "../../../../../redux/redux-store";
import {Avatar, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

export function PostWithUI (props: PostItemType) {
    return (
        <Card sx={{ maxWidth: 345, margin: '10px 0 10px 0' }}>
            <CardHeader
                className={classes.item}
                avatar={
                    <Avatar>
                        <img src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg"/>
                    </Avatar>
                }
                title={props.message}
                subheader={`${props.likes} liked it`}
            />
        </Card>

    )
}
