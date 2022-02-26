import {connect} from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

// function DialogsContainer(props) {
//     let state = props.store.getState()

//     let onSendMessage = () => {
//         props.store.dispatch(sendMessageCreator())
//     }

//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }

//     return <Dialogs messages={state.dialogsPage.messages} 
//                     dialogs={state.dialogsPage.dialogs} 
//                     newMessageChange={onNewMessageChange}
//                     sendMessage={onSendMessage}
//                     newMessageBody={state.dialogsPage.newMessageBody} />
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage:  state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        newMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer