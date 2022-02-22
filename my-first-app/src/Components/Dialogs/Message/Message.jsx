import s from './Message.module.css'

function Message(props) {
    return (
                <div className={`${s.message} + ${props.myMessage ? '' : s.message_right}`}>
                    {props.message}
                </div>
    )
}

export default Message

