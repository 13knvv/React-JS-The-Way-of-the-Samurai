import React from 'react'
import * as axios from "axios"
import { connect } from "react-redux"
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer"
import Users from "./Users"
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChangeed = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
       return <>
       {this.props.isFetching ? <Preloader /> : null}
       <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize} 
                    currentPage={this.props.currentPage}
                    onPageChangeed={this.onPageChangeed}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

 

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching 
    } ) (UsersContainer)




// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }