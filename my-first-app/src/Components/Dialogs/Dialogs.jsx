import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import WriteMessage from './WriteMessage/WriteMessage'

function Dialogs(props) {
  
    let messages = props.state.dialogsPage.messages.map((m, i) => {
        return <Message message={m.text} 
                        myMessage={m.myMessage} key={i} />
    })
    let dialog = props.state.dialogsPage.dialogs.map((d, i) => {
        return <Dialog name={d.name} id={d.id} key={i}/>
    })


    return (
        <div className={s.dialogs__wrapp}>
            <div className={s.messages}>
                {messages}
                <WriteMessage dispatch={props.dispatch} state={props.state}/>
            </div>
            <div className={s.dialogs}>
                {dialog}
            </div>
        </div>


    )
}

export default Dialogs