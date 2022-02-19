import c from './AboutMe.module.css'

function AboutMe(props) {
    return (
        <div className={c.AboutMe}>
            <img className={c.AboutMe__avatar} src="https://i.pinimg.com/originals/4f/37/ca/4f37ca49fe4aeaafff03e4db190f8b4c.png" alt="" />
            <div className={c.AboutMe__info}>
                <h1>{props.fuulName}</h1>
                <div><span>Sity:</span> {props.sity}</div>
                <div><span>Age:</span> {props.age}</div>
            </div>  
        </div>
    )
}

export default AboutMe
