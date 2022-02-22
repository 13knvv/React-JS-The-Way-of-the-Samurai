import s from './MyPost.module.css'

function MyPost(props) {
    return (
        <div className={s.MyPost}>
            <div className={s.MyPost__avatar}></div>
            <div className={s.MyPost__post} >
                <h4 className={s.MyPost__title} >{props.fullName}</h4>
                <p>{props.message}</p>
            </div>
            
        </div>
    )
}

export default MyPost
