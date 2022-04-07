import React from "react";
import classes from './Navbar.module.css';

export function Navbar () {
    return(
        <div className={classes.nav}>
            <div className={classes.item}>
                <a>Profile</a>
            </div>
            <div className={classes.item}>
                <a>Messages</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </div>
    )
}