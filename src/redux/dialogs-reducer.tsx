import {v1} from "uuid";
import {DialogsPageType} from "./store";

let initialDialogsPageState: DialogsPageType = {
    newMessageText: '',
    dialogs: [
        {id: v1(), name: 'Dmitry', path: '1'},
        {id: v1(), name: 'Max', path: '2'},
        {id: v1(), name: 'Denis', path: '3'},
        {id: v1(), name: 'Incubator', path: '4'}
    ],
    messages: [
        {id: v1(), message: 'Hey'},
        {id: v1(), message: 'Whats upp'},
        {id: v1(), message: 'How is your incubator'},
        {id: v1(), message: 'React is easy'}
    ]
}


export const dialogsReducer = (state = initialDialogsPageState, action: any) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        case 'ADD-NEW-MESSAGE':
            state.messages.push(
                {id: v1(), message: state.newMessageText}
            )
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const changeMessageAC = (newMessageValue: string) => ({
    type: "CHANGE-NEW-MESSAGE-TEXT",
    newMessage: newMessageValue
})
export const addMessageAC = () => ({
    type: 'ADD-NEW-MESSAGE'
})