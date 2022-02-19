import s from './Message.module.css'

export function Message(props) {
    return (
                <div className={s.message}>
                    {props.message}
                </div>
    )
}

export function MessageRight(props) {
    return (
                <div className={`${s.message} + ${s.message_right}`}>
                    {props.message}
                </div>
    )
}
 