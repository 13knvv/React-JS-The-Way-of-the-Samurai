import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { useMatch } from 'react-router-dom'
import { profileAPI, authAPI } from '../../api/api'

class ProfileContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuth().then(data => {
            let myId = data.data.id
            let userId = this.props.match ? this.props.match.params.userId : myId
            profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data)
            })
        })
        
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/')
    return <ProfileContainer {...props} match={match} />
  }

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileURLMatch)
