import * as axios from 'axios'
import s from './Users.module.css'
import userPhotoInitial from '../../assets/images/userPhotoInitial.png'

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }



    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map((u, i) => {
                    return <div className={s.user} key={i}>
                        <div className={s.user__photo} >
                            <div>
                                <img className={s.user__img} src={u.photos.small != null ? u.photos.small : userPhotoInitial} />
                            </div>
                            <div>
                                {u.followed
                                    ? (<button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>)
                                    : (<button onClick={() => { props.follow(u.id) }}>Follow</button>)}

                            </div>
                        </div>
                        <div className={s.user__info}>
                            <div>
                                <div className={s.user__fullName} >{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.user__location} >
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Users