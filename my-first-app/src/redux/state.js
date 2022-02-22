import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const store = {
    _state: {
        profilePage: {
            posts: [
                { fullName: 'Mike Knyazev', message: 'lylypplylyl' },
                { fullName: 'Mike Knyazev', message: 'lylyooooolylyl' },
                { fullName: 'Mike Knyazev', message: 'lylylylppppyl' },
                { fullName: 'Mike Knyazev', message: 'lyl;;;ylylyl' }
            ],
            newPostText: ''
        },
        dialogsPage: {
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

            newMessageBody: 'q'
        }
    },

    getState() { 
       return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
            ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
            ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

window.store = store
export default store
