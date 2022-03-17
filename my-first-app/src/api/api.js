import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: { 'API-KEY': '66523505-4327-416a-b6d8-49cf13d6bdc8' }
})


export const usersAPI = {
    
    getUsers(currentPage = 1, pageSize = 5) {
        return axiosBase.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollow(userId) {
        return axiosBase.delete(`/follow/${userId}`)
            .then(response => response.data)
    },

    follow(userId) {
        return axiosBase.post(`/follow/${userId}`)
            .then(response => response.data)
    },

    getProfile(userId) {
        return axiosBase.get(`/profile/${userId}`)
            .then(response => response.data)
    },
}



export const authAPI = {

    getAuth() {
        return axiosBase.get(`/auth/me`)
            .then(response => response.data)
                
    }
}