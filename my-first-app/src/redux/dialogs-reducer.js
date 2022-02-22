const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { name: 'Ratmir', id: '1', lastmessage: 'last message...' },
        { name: 'Mike', id: '2', lastmessage: 'last message...' },
        { name: 'Alena', id: '3', lastmessage: 'last message...' },
        { name: 'Tutuska', id: '4', lastmessage: 'last message...' },
        { name: 'Franklin', id: '5', lastmessage: 'last message...' },
    ],

    messages: [
        { text: 'how are you', myMessage: true },
        { text: 'how are you!!', myMessage: false },
        { text: 'how are you!!', myMessage: false },
        { text: 'how are you', myMessage: true }
    ],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        state.messages.push({text: body, myMessage: true})
        state.newMessageBody = ''

    }

    return state
}

export default dialogsReducer