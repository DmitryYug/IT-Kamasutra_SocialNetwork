import React from "react";
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../../redux/store";

type DialogItemPropsType = {
    name: string,
    path: string
}


export function DialogItem  (props: DialogItemPropsType) {
    return (
        <div className={classes.dialogs_item + ' ' + classes.active}>
            <NavLink to={'/dialogs' + props.path} >{props.name}</NavLink>
        </div>
    )
}

