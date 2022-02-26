const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { fullName: 'Mike Knyazev', message: 'lylypplylyl' },
        { fullName: 'Mike Knyazev', message: 'lylyooooolylyl' },
        { fullName: 'Mike Knyazev', message: 'lylylylppppyl' },
        { fullName: 'Mike Knyazev', message: 'lyl;;;ylylyl' },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            fullName: 'Mike Knyazev',
            message: state.newPostText
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPostText
    }

    return state
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
            ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
            
export default profileReducer