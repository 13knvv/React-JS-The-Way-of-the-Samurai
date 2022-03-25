import { connect } from 'react-redux'
import withAuthNavigateTo from '../../hoc/withAuthNavigateTo'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

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

const AuthNavigateComponent = withAuthNavigateTo(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthNavigateComponent)

export default DialogsContainer