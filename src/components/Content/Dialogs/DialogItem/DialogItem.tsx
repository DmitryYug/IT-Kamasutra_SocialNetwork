import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {PropsDialogItemType} from "../../../../redux/state";



export function DialogItem  (props: PropsDialogItemType) {
    return (
        <div className={classes.dialogs_item + ' ' + classes.active}>
            <NavLink to={'/dialogs' + props.path} >{props.name}</NavLink>
        </div>
    )
}

