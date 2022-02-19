import c from './MyPost.module.css'

function MyPost(props) {
    return (
        <div className={c.MyPost}>
            <div className={c.MyPost__avatar}></div>
            <div className={c.MyPost__post} >
                <h4 className={c.MyPost__title} >{props.fullName}</h4>
                <p>{props.massege}</p>
            </div>
            
        </div>
    )
}

export default MyPost
