import AboutMe from './AboutMe/AboutMe'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

function Profile(props) {
    
    return (
        <div>
            <AboutMe fuulName='Mike Knyazev' age='30' sity='Los Angeles' />
            <MyPosts dispatch={props.dispatch} state={props.state} />
        </div>


    )
}

export default Profile