import React, {RefObject} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPageType} from "../../../redux/state";




const NewMessage = () => {
    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()
    const onSend = () => {
        let newMessageValue = newMessageElement.current?.value
        console.log(newMessageValue)
    }

    return(
        <>
            <div>
                Dmitry:
            </div>
            <textarea
                ref={newMessageElement}
            >
            </textarea>
            <button
                onClick={onSend}
            >
                Send message
            </button>
        </>
    )
}


// type DialogsPropsType = {
//
// }

export function Dialogs(props: DialogsPageType) {

//Elements
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
            <div>
                <NewMessage/>
            </div>
        </div>
    )
}