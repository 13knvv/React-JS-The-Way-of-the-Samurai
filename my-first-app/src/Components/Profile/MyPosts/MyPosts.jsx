import React from 'react'
import MyPost from './MyPost/MyPost'
import s from './MyPosts.module.css'

function MyPosts(props) {
    let postsData = [
            {fullName: 'Mike Knyazev', massege: 'lylypplylyl'},
            {fullName: 'Mike Knyazev', massege: 'lylyooooolylyl'},
            {fullName: 'Mike Knyazev', massege: 'lylylylppppyl'},
            {fullName: 'Mike Knyazev', massege: 'lyl;;;ylylyl'}
        ]
    

    let posts = postsData.map((p, i) => {
        return <MyPost fullName={p.fullName} 
                        massege={p.massege} 
                        key={i}  />
    })

    let newPost = React.createRef()
    let addPost = () => {
        let text = newPost.current.value
        alert(text)
    }

    return (
        <div className={s.MyPosts}>
            <textarea ref={newPost} className={s.MyPosts__textarea} ></textarea>
            <button type="submit" onClick={addPost}>Add post</button>
                {posts} 
        </div>
    )
}

export default MyPosts
