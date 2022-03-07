import React from 'react'
import * as axios from 'axios'
import s from './Users.module.css'
import userPhotoInitial from '../../assets/images/userPhotoInitial.png'

class Users extends React.Component {
    
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChangeed = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                {
                pages.map((i, index) => {
                    return <button key={index} className={this.props.currentPage === i ? s.user__btnPage_active : ''}
                            onClick={() => this.onPageChangeed(i)}>{i}</button>
                }) 
                }
                
                {
                    this.props.users.map((u, i) => {
                        return <div className={s.user} key={i}>
                            <div className={s.user__photo} >
                                <div>
                                    <img className={s.user__img} src={u.photos.small != null ? u.photos.small : userPhotoInitial} />
                                </div>
                                <div>
                                    {u.followed
                                        ? (<button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>)
                                        : (<button onClick={() => { this.props.follow(u.id) }}>Follow</button>)}

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
}

export default Users