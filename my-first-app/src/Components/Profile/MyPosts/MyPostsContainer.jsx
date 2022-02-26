import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'
import MyPosts from './MyPosts'

function MyPostsContainer(props) {
    let state = props.store.getState()

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onNewPostChange = (body) => {
        props.store.dispatch(updateNewPostTextActionCreator(body))
    }
    

    return <MyPosts updateNewPostText={onNewPostChange} 
                    addPost={onAddPost} 
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
}

export default MyPostsContainer
