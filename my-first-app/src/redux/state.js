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

            newMessageBody: ''
        }
    },

    getState() { 
       return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                fullName: 'Mike Knyazev',
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state) 
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({text: body, myMessage: true})
            this._callSubscriber(this._state) 
        }
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
