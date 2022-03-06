import React from 'react'
import s from './WriteMessage.module.css'

function WriteMessage(props) {
    let refNewMessage = React.createRef()
    let onSendMessage = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        console.log(body)
        props.newMessageChange(body)
    }

    return (
        <div>
            <textarea value={props.newMessageBody}
                    ref={refNewMessage}
                    onChange={onNewMessageChange}></textarea>
            <br/>
            <button type="submit" onClick={onSendMessage}>Send</button>
        </div>
    )
}

export default WriteMessage