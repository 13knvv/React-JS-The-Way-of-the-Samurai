import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import WriteMessage from './WriteMessage/WriteMessage'

function Dialogs(props) {
    
    let message = props.dialogsPage.messages.map((m, i) => {
        return <Message message={m.text} 
                        myMessage={m.myMessage} key={i} />
    })
    let dialog = props.dialogsPage.dialogs.map((d, i) => {
        return <Dialog name={d.name} id={d.id} key={i}/>
    })


    return (
        <div className={s.dialogs__wrapp}>
            <div className={s.messages}>
                {message}
                <WriteMessage newMessageChange={props.newMessageChange}
                              sendMessage={props.sendMessage}
                              newMessageBody={props.dialogsPage.newMessageBody} />
            </div>
            <div className={s.dialogs}>
                {dialog}
            </div>
        </div>


    )
}

export default Dialogs