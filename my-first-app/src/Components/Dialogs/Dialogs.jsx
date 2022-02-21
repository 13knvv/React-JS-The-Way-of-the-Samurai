import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import WriteMessage from './WriteMessage/WriteMessage'

function Dialogs() {
    let messageData = [
        {text: 'how are you', myMessage: false},
        {text: 'how are you!!', myMessage: true},
        {text: 'how are you!!', myMessage: true},
        {text: 'how are you', myMessage: false} 
    ]

    let messages = messageData.map((m, i) => {
        return <Message message={m.text} 
                        myMessage={m.myMessage} key={i} />
    })

    let dialogsData = [
        {name:'Ratmir', id: '1',lastmessage: 'last message...'},
        {name:'Mike', id: '2',lastmessage: 'last message...'},
        {name:'Alena', id: '3',lastmessage: 'last message...'},
        {name:'Tutuska', id: '4',lastmessage: 'last message...'},
        {name:'Franklin', id: '5',lastmessage: 'last message...'},
    ] 
    let dialog = dialogsData.map((d, i) => {
        return <Dialog name={d.name} id={d.id} key={i}/>
    })

    return (
        <div className={s.dialogs__wrapp}>
            <div className={s.messages}>
                {messages}
                <WriteMessage />
            </div>
            <div className={s.dialogs}>
                {dialog}
            </div>
        </div>


    )
}

export default Dialogs