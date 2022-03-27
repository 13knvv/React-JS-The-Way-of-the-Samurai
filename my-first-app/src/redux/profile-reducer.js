import { authAPI, profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { fullName: 'Mike Knyazev', message: 'lylypplylyl' },
        { fullName: 'Mike Knyazev', message: 'lylyooooolylyl' },
        { fullName: 'Mike Knyazev', message: 'lylylylppppyl' },
        { fullName: 'Mike Knyazev', message: 'lyl;;;ylylyl' },
    ],
    newPostText: '',
    profile: null,
    status: 'q'
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

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })
export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) =>
    ({ type: SET_STATUS, status })    

export const getProfile = (match) => {

    return (dispatch) => {
        authAPI.getAuth().then(data => {
            let myId = data.data.id
            let userId = match ? match.params.userId : myId
            profileAPI.getProfile(userId).then(data => {
                dispatch(setUserProfile(data))
            })
        })
    }
}

export const getUserStatus = (match) => {

    return (dispatch) => {
        authAPI.getAuth().then(data => {
            let myId = data.data.id
            let userId = match ? match.params.userId : myId
            profileAPI.getStatus(userId).then(status => {
                dispatch(setStatus(status))
            })
        })
    }
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer