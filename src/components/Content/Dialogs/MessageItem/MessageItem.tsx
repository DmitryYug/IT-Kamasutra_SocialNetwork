import React from "react";
import classes from "../Dialogs.module.css";
import {MessageItemType} from "../../../../redux/state";


export function MessageItem (props: MessageItemType) {
    return (
        <div className={classes.messages_item + ' ' + classes.active}>
            {props.message}
        </div>
    )

}
