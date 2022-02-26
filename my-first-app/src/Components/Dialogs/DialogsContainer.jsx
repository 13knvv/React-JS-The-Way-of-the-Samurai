import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state'
import Dialogs from './Dialogs'

function DialogsContainer(props) {
    let state = props.store.getState()

    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs messages={state.dialogsPage.messages} 
                    dialogs={state.dialogsPage.dialogs} 
                    newMessageChange={onNewMessageChange}
                    sendMessage={onSendMessage}
                    newMessageBody={state.dialogsPage.newMessageBody} />
}

export default DialogsContainer