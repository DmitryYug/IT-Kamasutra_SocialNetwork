import React from "react";
import classes from "./Post.module.css";
import {PostItemType} from "../../../../../redux/redux-store";
import {Avatar, Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import {red} from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';

export function PostWithUI(props: PostItemType) {
    return (
        <Card sx={{maxWidth: 345, margin: '10px 0 10px 0'}}>
            <CardHeader
                className={classes.item}
                avatar={
                    <Avatar
                        // sx={{ bgcolor: red[500] }} aria-label="recipe"
                    >
                        <img src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg"/>
                    </Avatar>
                }
                title={props.message}
                subheader={
                    <>
                        <FavoriteIcon/> {props.likes}
                    </>
                }
            />
        </Card>

    )
}

//Local components
//     const Avatar = () => {
//     return (
//         <div className={classes.item}>
//             <img src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg"/>
//         </div>
//     )
// }
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


// <Card sx={{ maxWidth: 100}}>
//     <CardMedia
//         className={classes.item}
//         component="img"
//         height="100px"
//         image="https://byuc.files.wordpress.com/2012/07/avat-2.jpg"
//         alt="green iguana"
//     />
//     <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//             {props.message}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//             {props.likes} users liked it
//         </Typography>
//     </CardContent>
// </Card>