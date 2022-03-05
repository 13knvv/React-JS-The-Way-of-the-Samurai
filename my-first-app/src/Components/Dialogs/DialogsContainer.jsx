import { connect } from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs'

function DialogsContainer() {


    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState().dialogsPage
                let onSendMessage = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }

                return <Dialogs messages={state.messages}
                                dialogs={state.dialogs}
                                newMessageChange={onNewMessageChange}
                                sendMessage={onSendMessage}
                                newMessageBody={state.newMessageBody} />
            }
        }
        </StoreContext.Consumer>
    )

}

// let mapStateToProps = (state) => {
//     return {
//         dialogsPage:  state.dialogsPage
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => {
//             dispatch(sendMessageCreator())
//         },
//         newMessageChange: (body) => {
//             dispatch(updateNewMessageBodyCreator(body))
//         }
//     }
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer