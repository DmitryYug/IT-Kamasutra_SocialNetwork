import React, {ChangeEvent, RefObject} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {AddMessageAC, ChangeMessageAC} from "../../../redux/dialogs-reducer";
import {DialogItemType, MessageItemType} from "../../../redux/redux-store";
import {Button, TextField} from "@mui/material";


type DialogsPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessageText: string
    addMessageOnClick: () => void
    addMessageOnChange: (newMessageValue: string) => void
}


export function DialogsWithUI(props: DialogsPropsType) {

    const addMessageOnClick = () => {
        props.addMessageOnClick()
    }
    const addMessageOnChange = (newMessageValue: string) => {
        props.addMessageOnChange(newMessageValue)
    }

//Elements
    const dialogItems = props.dialogs.map(d => {
        return (
            <div className={classes.dialogs_item}>
                {d.name}
            </div>
        )
    })
    const messageItems = props.messages.map(m => {
        return (
            <div className={classes.textArea}>
                {m.message}
            </div>
        )
    })

    return (
        <>
            <div className={classes.dialogs_wrapper}>
                <div>{dialogItems}</div>
                <div>{messageItems}</div>
            </div>
            <NewMessage
                newMessageText={props.newMessageText}
                addMessageOnClick={props.addMessageOnClick}
                addMessageOnChange={props.addMessageOnChange}
            />
        </>
    )
}

//Local components
type NewMessagePropsType = {
    newMessageText: string,
    addMessageOnClick: () => void
    addMessageOnChange: (newMessageValue: string) => void
}

const NewMessage: React.FC<NewMessagePropsType> = (props) => {

    // let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessageOnClickHandler = () => {
        props.addMessageOnClick()
    }
    const addMessageOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let newMessageValue = e.currentTarget?.value
        // let newMessageValue = newMessageElement.current?.value
        if (newMessageValue) {
            props.addMessageOnChange(newMessageValue)
        }
    }

    return (
        <div>
            <TextField
                sx={{
                    margin: '0 0 0 20px',
                    display: 'block'
                }}
                id="outlined-basic"
                label="Type your message..."
                variant="outlined"
                value={props.newMessageText}
                onChange={addMessageOnChangeHandler}
            />
            <Button
                sx={{margin: '10px 0 0 20px'}}
                variant="contained"
                onClick={addMessageOnClickHandler}
            >
                Send message
            </Button>
        </div>
    )
}
