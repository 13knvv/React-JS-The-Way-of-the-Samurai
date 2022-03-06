

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
    switch (action.type) {
        case SEND_MESSAGE:{
            let body = state.newMessageBody
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages] 
            stateCopy.messages.push({text: body, myMessage: true})
            stateCopy.newMessageBody = ''
            return stateCopy
            }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
            }
        default: 
            return state
    }
}

export const sendMessageCreator = () => ( {type: SEND_MESSAGE} )
export const updateNewMessageBodyCreator = (body) => 
            ( {type: UPDATE_NEW_MESSAGE_BODY, body: body} )

export default dialogsReducer