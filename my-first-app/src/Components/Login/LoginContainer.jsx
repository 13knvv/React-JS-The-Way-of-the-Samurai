import React from 'react'
import { connect } from "react-redux"
import Login from './Login'

class LoginContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return <Login/>
        
    }
}

const mapStateToProps = (state) => {
    return {
    }
}



export default connect(mapStateToProps, {

})(LoginContainer)




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