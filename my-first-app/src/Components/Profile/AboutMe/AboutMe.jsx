import s from './AboutMe.module.css'

function AboutMe(props) {
    return (
        <div className={s.AboutMe}>
            <img className={s.AboutMe__avatar} src="https://i.pinimg.com/originals/4f/37/ca/4f37ca49fe4aeaafff03e4db190f8b4c.png" alt="" />
            <div className={s.AboutMe__info}>
                <h1>{props.fuulName}</h1>
                <div><span>Sity:</span> {props.sity}</div>
                <div><span>Age:</span> {props.age}</div>
            </div>  
        </div>
    )
}

export default AboutMe
