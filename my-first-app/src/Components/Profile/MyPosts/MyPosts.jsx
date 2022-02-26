import React from 'react'
import MyPost from './MyPost/MyPost'
import s from './MyPosts.module.css'

function MyPosts(props) {
 
    let newPost = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onNewPostChange = (e) => {
        let body = e.target.value
        props.updateNewPostText(body)
    }
    
       
    let posts = props.posts.map((p, i) => {
        return <MyPost fullName={p.fullName} 
                        message={p.message} 
                        key={i}  />
    }).reverse()


    return (
        <div className={s.MyPosts}>
            <textarea value={props.newPostText}
                        ref={newPost} 
                        className={s.MyPosts__textarea} 
                        onChange={onNewPostChange}></textarea>
            <button type="submit" onClick={onAddPost}>Add post</button>
                {posts} 
        </div>
    )
}

export default MyPosts
