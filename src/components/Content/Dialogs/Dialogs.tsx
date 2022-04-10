import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                <div className={classes.dialogs_item + ' ' + classes.active}>
                    <NavLink to='/dialogs/1' >Dmitry</NavLink>
                </div>
                <div className={classes.dialogs_item}>
                    <NavLink to='/dialogs/2' >Max</NavLink>
                </div>
                <div className={classes.dialogs_item}>
                    <NavLink to='/dialogs/3' >Denis</NavLink>
                </div>
                <div className={classes.dialogs_item}>
                    <NavLink to='/dialogs/4' >Incubator</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.messages_item + ' ' + classes.active}>Hey</div>
                <div className={classes.messages_item}>Hello</div>
                <div className={classes.messages_item}>Whats up?</div>
                <div className={classes.messages_item}>React is cool</div>
            </div>
        </div>
    )
}