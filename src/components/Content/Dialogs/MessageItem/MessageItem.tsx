import React from "react";
import classes from "../Dialogs.module.css";
import {PropsMessageItemType} from "../../../../redux/state";


export function MessageItem (props: PropsMessageItemType) {
    return (
        <div className={classes.messages_item + ' ' + classes.active}>
            {props.message}
        </div>
    )

}
