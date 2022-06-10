import React from "react";
import {AddMessageAC, ChangeMessageAC} from "../../../redux/dialogs-reducer";
import {DialogItemType, MessageItemType, RootsStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DialogsWithUI} from "./DialogsWithUI";

type MapStateToProps = {
    newMessageText: string
    dialogs: Array<DialogItemType>,
    messages: Array<MessageItemType>
}
type MapDispatchToProps = {
    addMessageOnClick: () => void
    addMessageOnChange: (newMessageValue: string) => void
}

let mapStateToProps = (state: RootsStateType): MapStateToProps => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addMessageOnClick: () => {
            dispatch(AddMessageAC())
        },
        addMessageOnChange: (newMessageValue: string) => {
            dispatch(ChangeMessageAC(newMessageValue))
        }
    }
}
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithUI)