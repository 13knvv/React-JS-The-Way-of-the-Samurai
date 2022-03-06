import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
       props.setUsers( [
            { id: 1, photoUrl: 'https://www.pngkit.com/png/full/988-9886241_hotel-computer-icons-linkedin-native-advertising-chatbot-gloucester.png', 
            followed: true, fullName: 'Mike Knyazev', status: 'lylypplylyl', location: {city: 'Los Angeles', country: 'USA'} },
            { id: 2, photoUrl: 'https://www.pngkit.com/png/full/988-9886241_hotel-computer-icons-linkedin-native-advertising-chatbot-gloucester.png', 
            followed: true, fullName: 'Patmir Knyazev', status: 'lylypplylyl', location: {city: 'New York', country: 'USA'} },
            { id: 3, photoUrl: 'https://www.pngkit.com/png/full/988-9886241_hotel-computer-icons-linkedin-native-advertising-chatbot-gloucester.png', 
            followed: true, fullName: 'Alena Knyazeva', status: 'lylypplylyl', location: {city: 'Miami', country: 'USA'} },
            { id: 4, photoUrl: 'https://www.pngkit.com/png/full/988-9886241_hotel-computer-icons-linkedin-native-advertising-chatbot-gloucester.png', 
            followed: false, fullName: 'Tutuska Knyazeva', status: 'lylypplylyl', location: {city: 'Austin', country: 'USA'} },
        ]) 
    }
    

    return (
        <div>
            {
                props.users.map((u, i) => {
                    return <div className={s.user} key={i}>
                        <div className={s.user__photo} >
                            <div>
                                <img className={s.user__img} src={u.photoUrl}/>
                            </div>
                            <div>
                                {u.followed  
                                ? (<button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>) 
                                : (<button onClick={ () => {props.follow(u.id)}}>Follow</button>)}
                                
                            </div>
                        </div>
                        <div className={s.user__info}>
                            <div>
                                <div className={s.user__fullName} >{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.user__location} >
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Users