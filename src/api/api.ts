import axios from "axios";
import {setAuthData} from "../redux/auth-reducer";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '196fda89-f8e8-40cc-ace3-5e6ca04b4b80'
    }
})

export const getUsersAPI = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const authMeAPI = () => {
    return instance.get(`auth/me`).then(response => response.data)
}

export const getUserProfileAPI = (userId: string) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const followAPI = (userId: string) => {
   return instance.post(`follow/${userId}`).then(response => response.data)
}

export const unFollowAPI = (userId: string) => {
    return instance.delete(`follow/${userId}`,).then(response => response.data)
}