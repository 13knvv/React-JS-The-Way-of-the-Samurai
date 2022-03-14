import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.header__login}>
            {props.isAuth ? 
                <NavLink to={'/profile'}>{props.login }</NavLink> :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header