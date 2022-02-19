import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom'

function Dialog(props) {
    
    return (
        
        <NavLink to={'/messages/' + props.id} className = { navData => navData.isActive ? s.navLink_message_Active : s.navLink_message }>
            <div className={s.dialog}>
                {props.name}
            </div>
        </NavLink>
        
    )
}

export default Dialog