import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/state'
import s from './WriteMessage.module.css'

function WriteMessage(props) {
    let refNewMessage = React.createRef()
    let onSendMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div>
            <textarea value={props.state.dialogsPage.newMessageBody} 
                    ref={refNewMessage}
                    onChange={onNewMessageChange}></textarea>
            <br/>
            <button type="submit" onClick={onSendMessage}>Send</button>
        </div>
    )
}

export default WriteMessage