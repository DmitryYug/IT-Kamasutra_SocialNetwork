import React, {RefObject} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItemType, MessageItemType} from "../../../redux/store";
import {addMessageAC, changeMessageAC} from "../../../redux/dialogs-reducer";


type DialogsPropsType = {
    newMessageText: string
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    dispatch: (action: any) => void

}


export function Dialogs(props: DialogsPropsType) {

//Elements
    const dialogItems = props.dialogs.map(d => {
        return (
            <DialogItem
                key={d.id}
                name={d.name}
                path={d.path}
            />
        )
    })
    const messageItems = props.messages.map(m => {
        return (
            <MessageItem
                key={m.id}
                message={m.message}/>
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
                />
            </div>
        </div>
    )
}

//Local components
    type NewMessagePropsType = {
        newMessageText: string
        dispatch: (action: any) => void
    }

    const NewMessage: React.FC<NewMessagePropsType> = (props) => {

        let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

        const addMessageOnClickHandler = () => {
            props.dispatch(addMessageAC())
        }
        const addMessageOnChangeHandler = () => {
            let newMessageValue = newMessageElement.current?.value
            if (newMessageValue) {
                props.dispatch(changeMessageAC(newMessageValue))
            }
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

