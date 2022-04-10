import React from "react";
// import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export function Profile() {
    return(
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmzHamssh3M081NcC3AWVhzJCzG76vADS7Q&usqp=CAU" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    )
}