import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'
import MyPost from './MyPost/MyPost'
import s from './MyPosts.module.css'

function MyPosts(props) {
 
    let newPost = React.createRef()
    let onAddPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onNewPostChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewPostTextActionCreator(body))
    }

    let posts = props.state.profilePage.posts.map((p, i) => {
        return <MyPost fullName={p.fullName} 
                        message={p.message} 
                        key={i}  />
    })


    return (
        <div className={s.MyPosts}>
            <textarea value={props.state.profilePage.newPostText}
                        ref={newPost} 
                        className={s.MyPosts__textarea} 
                        onChange={onNewPostChange}></textarea>
            <button type="submit" onClick={onAddPost}>Add post</button>
                {posts} 
        </div>
    )
}

export default MyPosts
