import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPagePropsType} from "../../../redux/state";


export function Dialogs(props: DialogsPagePropsType) {

//Rendered Items
    const dialogItems = props.dialogs.map(d => {
       return (
           <DialogItem
               name={d.name}
               path={d.path}/>
       )
    })
    const messageItems = props.messages.map(m => {
        return (
            <MessageItem message={m.message}/>
        )
    })

    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                {dialogItems}
            </div>
            <div className={classes.messages}>
                {messageItems}
            </div>
        </div>
    )
}