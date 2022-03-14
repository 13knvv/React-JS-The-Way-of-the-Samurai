import s from './Users.module.css'
import userPhotoInitial from '../../assets/images/userPhotoInitial.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { followAPI } from '../../api/api'



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            {
                props.users.map((u, i) => {
                    return <div className={s.user} key={i}>
                            <div className={s.user__photo} >
                                <NavLink to={`/profile/${u.id}`}>
                                    <div>
                                        <img className={s.user__img} src={u.photos.small != null ? u.photos.small : userPhotoInitial} />
                                    </div>
                                </NavLink>
                                <div>
                                    {u.followed
                                        ? (<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                                            props.toggleFollowingProgress(true, u.id)
                                            followAPI.unfollow(u.id).then(data => {
                                                    if (data.resultCode === 0) {
                                                       props.unfollow(u.id) 
                                                    }
                                                    props.toggleFollowingProgress(false, u.id)
                                                })
                                             
                                        }}>Unfollow</button>)

                                        : (<button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            followAPI.follow(u.id).then(data => {
                                                    if (data.resultCode === 0) {
                                                       props.follow(u.id) 
                                                    }
                                                    props.toggleFollowingProgress(false, u.id)
                                                })
                                            }}>Follow</button>)}

                                </div>
                            </div>
                            <div className={s.user__info}>
                                <div>
                                    <NavLink className={s.user__navLink }to={`/profile/${u.id}`}>
                                        <div className={s.user__fullName} >{u.name}</div>
                                    </NavLink>
                                    <div>{u.status}</div>
                                </div>
                                <div className={s.user__location} >
                                    <div>{'California'}</div>
                                    <div>{'Los Angeles'}</div>
                                </div>
                            </div>
                        </div>
                    
                    
                })
            }

            {
                pages.map((i, index) => {
                    return <button key={index} className={props.currentPage === i ? s.user__btnPage_active : ''}
                        onClick={() => props.onPageChangeed(i)}>{i}</button>
                })
            }
        </div>
    )

}

export default Users