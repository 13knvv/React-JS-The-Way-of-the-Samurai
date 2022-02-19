import s from './Dialogs.module.css'
import { Message, MessageRight } from './Message/Message'
import Dialog from './Dialog/Dialog'

function Dialogs() {
    return (
        <div className={s.dialogs__wrapp}>
            <div className={s.messages}>
                <Message message='how are you' />
                <MessageRight message='how are you!!!!' />
                <MessageRight message='how are you!!!!' />
                <Message message='how are you' />

            </div>
            <div className={s.dialogs}>
                <Dialog name='Ratmir' id='1' />
                <Dialog name='Mike' id='2' />
                <Dialog name='Alena' id='3' />
                <Dialog name='Tutuska' id='4' />
                <Dialog name='Franklin' id='5' />

            </div>
        </div>


    )
}

export default Dialogs