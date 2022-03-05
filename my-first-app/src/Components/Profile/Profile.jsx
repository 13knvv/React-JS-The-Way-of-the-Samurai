import AboutMe from './AboutMe/AboutMe'
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'

function Profile(props) {
    
    return (
        <div>
            <AboutMe fuulName='Mike Knyazev' age='30' sity='Los Angeles' />
            <MyPostsContainer />
        </div>


    )
}

export default Profile