import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../../redux/state";

// type PropsDialogItemType = {
//
// }


export function DialogItem  (props: DialogItemType) {
    return (
        <div className={classes.dialogs_item + ' ' + classes.active}>
            <NavLink to={'/dialogs' + props.path} >{props.name}</NavLink>
        </div>
    )
}

