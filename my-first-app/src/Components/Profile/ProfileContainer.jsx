import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile, getUserStatus, updateStatus } from '../../redux/profile-reducer'
import { useMatch } from 'react-router-dom'
import withAuthNavigateTo from '../../hoc/withAuthNavigateTo'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match)
        this.props.getUserStatus(this.props.match)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/')
    return <ProfileContainer {...props} match={match} />
    debugger
  }

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateStatus}),
    //withAuthNavigateTo,
)(ProfileURLMatch)

