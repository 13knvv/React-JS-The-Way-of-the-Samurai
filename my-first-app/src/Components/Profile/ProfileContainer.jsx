import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile } from '../../redux/profile-reducer'
import { useMatch } from 'react-router-dom'
import withAuthNavigateTo from '../../hoc/withAuthNavigateTo'

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
let  AuthNavigateComponent = withAuthNavigateTo(ProfileContainer)

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/')
    return <AuthNavigateComponent {...props} match={match} />
  }


export default connect(mapStateToProps, {
    getProfile
})(ProfileURLMatch)
