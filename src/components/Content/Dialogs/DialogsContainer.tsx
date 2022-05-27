import React from "react";
import {Dialogs} from "./Dialogs";
import {AddMessageAC, ChangeMessageAC} from "../../../redux/dialogs-reducer";

type DialogsContainerPropsType = {
    store: any
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    const {dialogs, messages, newMessageText} = props.store.getState().dialogsReducer

    const addMessageOnClick = () => {
        props.store.dispatch(AddMessageAC())
    }
    const addMessageOnChange = (newMessageValue: string) => {
        props.store.dispatch(ChangeMessageAC(newMessageValue))
    }

    return (
        <Dialogs
            dialogs={dialogs}
            messages={messages}
            newMessageText={newMessageText}
            addMessageOnClick={addMessageOnClick}
            addMessageOnChange={addMessageOnChange}
        />
    )
}
