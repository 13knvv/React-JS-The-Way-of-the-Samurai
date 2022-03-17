import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile } from '../../redux/profile-reducer'
import { useMatch } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match)
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
    getProfile
})(ProfileURLMatch)
