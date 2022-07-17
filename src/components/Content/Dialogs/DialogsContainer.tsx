import React from "react";
import {AddMessageAC, ChangeMessageAC} from "../../../redux/dialogs-reducer";
import {DialogItemType, MessageItemType, RootsStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {DialogsWithUI} from "./DialogsWithUI";
import { WithAuthRedirect } from "../../WithAuthRedirect";

type MapStateToProps = {
    newMessageText: string
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
}
type MapDispatchToProps = {
    addMessageOnClick: () => void
    addMessageOnChange: (newMessageValue: string) => void
}
export type DialogsPropsType = MapDispatchToProps & MapStateToProps

let mapStateToProps = (state: RootsStateType): MapStateToProps => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(DialogsWithUI)