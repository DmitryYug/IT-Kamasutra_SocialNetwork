import React, {ChangeEvent, RefObject} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {AddMessageAC, ChangeMessageAC} from "../../../redux/dialogs-reducer";
import {DialogItemType, MessageItemType} from "../../../redux/redux-store";
import {Button, TextField} from "@mui/material";
import {MyAddItemField} from "../../MyUiComponents/MyAddItemField/MyAddItemField";
import {v1} from "uuid";
import { DialogsPropsType } from "./DialogsContainer";
import { Redirect } from "react-router-dom";


export function DialogsWithUI(props: DialogsPropsType) {

    const addMessageOnClick = () => {
        props.addMessageOnClick()
    }
    const addMessageOnChange = (newMessageValue: string) => {
        props.addMessageOnChange(newMessageValue)
    }

    // if (!props.isAuth) return <Redirect to={'/login'}/>
    
//Elements
    const dialogItems = props.dialogs.map(d => {
        return (
            <div
                key={v1()}
                className={classes.dialogs_item}
            >
                {d.name}
            </div>
        )
    })
    const messageItems = props.messages.map(m => {
        return (
            <div
                key={v1()}
                className={classes.textArea}
            >
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
        <div
            style={{margin: '0 0 10px 10px'}}
        >
            <MyAddItemField
                value={props.newMessageText}
                labelText={'Type your message...'}
                errorLabelText={'should be smth'}
                onClickCallback={addMessageOnClickHandler}
                onChangeCallback={props.addMessageOnChange}
                onKeyPressCallback={addMessageOnClickHandler}
            />
        </div>
    )
}

