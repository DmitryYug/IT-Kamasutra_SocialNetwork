export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        case 'ADD-NEW-MESSAGE':
            state.messages.push(
                {message: state.newMessageText}
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