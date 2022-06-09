import {v1} from "uuid";
import {DialogsPageType} from "./redux-store";

type AddMessageACType = ReturnType<typeof AddMessageAC>
type ChangeMessageACType = ReturnType<typeof ChangeMessageAC>
type DialogsReducerType = ChangeMessageACType | AddMessageACType

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


export const dialogsReducer =
    (state = initialDialogsPageState, action: DialogsReducerType): DialogsPageType => {
        switch (action.type) {
            case 'CHANGE-NEW-MESSAGE-TEXT':
                return {
                    ...state,
                    newMessageText: action.newMessage
                }
            case 'ADD-NEW-MESSAGE':
                let newMessage = {id: v1(), message: state.newMessageText}
                return {
                    ...state,
                    newMessageText: '',
                    messages: [...state.messages, newMessage]
                }
            default:
                return state
        }
    }

export const ChangeMessageAC = (newMessageValue: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-TEXT",
        newMessage: newMessageValue
    } as const
}
export const AddMessageAC = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    } as const
}