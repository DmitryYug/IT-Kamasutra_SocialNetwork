import React from "react";
import {Dialogs} from "./Dialogs";
import {AddMessageAC, ChangeMessageAC} from "../../../redux/dialogs-reducer";
import {RootsStateType} from "../../../redux/redux-store";
import {AddPostAC, ChangePostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "../Profile/MyPosts/MyPosts";

// type DialogsContainerPropsType = {
//     store: any
// }

// export const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//     const {dialogs, messages, newMessageText} = props.store.getState().dialogsReducer
//
//     const addMessageOnClick = () => {
//         props.store.dispatch(AddMessageAC())
//     }
//     const addMessageOnChange = (newMessageValue: string) => {
//         props.store.dispatch(ChangeMessageAC(newMessageValue))
//     }
//
//     return (
//         <Dialogs
//             dialogs={dialogs}
//             messages={messages}
//             newMessageText={newMessageText}
//             addMessageOnClick={addMessageOnClick}
//             addMessageOnChange={addMessageOnChange}
//         />
//     )
// }
// export const DialogsContainer = () => {

// const {dialogs, messages, newMessageText} = props.store.getState().dialogsReducer
//
// const addMessageOnClick = () => {
//     props.store.dispatch(AddMessageAC())
// }
// const addMessageOnChange = (newMessageValue: string) => {
//     props.store.dispatch(ChangeMessageAC(newMessageValue))
// }
//
// return (
//     <Dialogs
//         dialogs={dialogs}
//         messages={messages}
//         newMessageText={newMessageText}
//         addMessageOnClick={addMessageOnClick}
//         addMessageOnChange={addMessageOnChange}
//     />
// )
// }


let mapStateToProps = (state: RootsStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessageOnClick: () => {
            dispatch(AddMessageAC())
        },
        addMessageOnChange: (newMessageValue: string) => {
            dispatch(ChangeMessageAC(newMessageValue))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)