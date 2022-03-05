import React from 'react'
import MyPost from './MyPost/MyPost'
import s from './MyPosts.module.css'

function MyPosts(props) {
 
    let newPost = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPost.current.value
        props.updateNewPostText(text)
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
                        onChange={onPostChange}></textarea>
            <button type="submit" onClick={onAddPost}>Add post</button>
                {posts} 
        </div>
    )
}

export default MyPosts
