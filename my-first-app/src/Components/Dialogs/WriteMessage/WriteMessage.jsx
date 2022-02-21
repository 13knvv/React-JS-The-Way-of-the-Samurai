import React from 'react'
import s from './WriteMessage.module.css'

function WriteMessage() {
    let refNewMessage = React.createRef()
    let sendMessage = () => {
        let newMessage = refNewMessage.current.value
        alert(newMessage)
    }

    return (
        <div>
            <textarea ref={refNewMessage}></textarea>
            <br/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default WriteMessage