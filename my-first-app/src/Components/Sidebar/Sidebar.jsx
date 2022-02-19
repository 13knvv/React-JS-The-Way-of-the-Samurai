import c from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={c.sidebar}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/messages">Messages</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </div>
    )
}

export default Sidebar