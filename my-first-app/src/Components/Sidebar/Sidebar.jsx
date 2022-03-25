import { NavLink } from 'react-router-dom'
import s from './Sidebar.module.css'

function Sidebar() {

    
    
    return (
        <div className={s.sidebar}>
            <ul>
                <li><NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink }  to={`/profile/`}>Profile</NavLink></li>
                <li><NavLink className = { navData  => navData.isActive ? s.navLink_Active  : s.navLink } to="/messages">Messages</NavLink></li>
                <li><NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink } to="/news">News</NavLink></li>
                <li><NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink } to="/music">Music</NavLink></li>
                <li><NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink } to="/settings">Settings</NavLink></li>
                <li><NavLink className = { navData => navData.isActive ? s.navLink_Active : s.navLink } to="/users">Users</NavLink></li> 
            </ul>
        </div>
    )
}

export default Sidebar