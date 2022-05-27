import React from "react";
import classes from "../Dialogs.module.css";
import {MessageItemType} from "../../../../redux/store";

type MessageItemPropsType = {
    message: string
}

export function MessageItem (props: MessageItemPropsType) {
    return (
        <div className={classes.messages_item + ' ' + classes.active}>
            {props.message}
        </div>
    )

}
