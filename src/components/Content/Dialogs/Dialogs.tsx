import React, {RefObject} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {
    DialogItemType,
    MessageItemType
} from "../../../redux/state";


type DialogsPropsType = {
    newMessageText: string
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    // changeNewMessageText: (newMessageValue: string) => void
    // addNewMessage: (newMessageValue: string) => void
    dispatch: (action: any) => void

}


export function Dialogs(props: DialogsPropsType) {

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
                <NewMessage
                    newMessageText={props.newMessageText}
                    dispatch={props.dispatch}

                    // changeNewMessageText={props.changeNewMessageText}
                    // addNewMessage={props.addNewMessage}
                />
            </div>
        </div>
    )
}

//Local components
    type NewMessagePropsType = {
        newMessageText: string
        // changeNewMessageText: (newMessageValue: string) => void
        // addNewMessage: (newMessageValue: string) => void
        dispatch: (action: any) => void

    }

    const NewMessage: React.FC<NewMessagePropsType> = (props) => {

        let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

        const addMessageOnClickHandler = () => {
            props.dispatch({type: "ADD-NEW-MESSAGE"})
            // props.addNewMessage(props.newMessageText)
            // console.log(props.newMessageText)
            // console.log('ok')
        }
        const addMessageOnChangeHandler = () => {
            let newMessageValue = newMessageElement.current?.value
            props.dispatch({type: "CHANGE-NEW-MESSAGE-TEXT", newMessage: newMessageValue})
            // props.changeNewMessageText(newMessageValue)

        }

        return(
            <>
                <div> Dmitry: </div>
                <textarea
                    onChange={addMessageOnChangeHandler}
                    ref={newMessageElement}
                    value={props.newMessageText}
                >
                </textarea>
                <button onClick={addMessageOnClickHandler}>
                    Send message
                </button>
            </>
        )
    }

