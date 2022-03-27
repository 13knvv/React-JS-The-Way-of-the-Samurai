import s from './ProfileInfo.module.css'
import userPhotoInitial from '../../../assets/images/userPhotoInitial.png'
import ProfileStatus from '../ProfileStatus/ProfileStatus'

function ProfileInfo(props) {

    let contacts = Object.entries(props.profile.contacts).map((c, i) => {
       return (c[0] && c[1]) ? <div key={i}><span>{c[0]}:</span> <a href={c[1]} target="_blank" rel="noopener noreferrer">{c[1]}</a></div> : null
    })
                

    return (
        <div className={s.AboutMe}>
            <img className={s.AboutMe__avatar} src={props.profile.photos.large ? props.profile.photos.large : userPhotoInitial} alt="" />
            <div className={s.AboutMe__info}>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatus textStatus='status here' />
                <div className={s.AboutMe__contacts}><span>Contacts:</span> {props.profile.aboutMe}</div>
                {contacts}
            </div>  
        </div>
    )
}

export default ProfileInfo
