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
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                fullName: 'Mike Knyazev',
                message: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }

        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })

export default profileReducer