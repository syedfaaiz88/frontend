// src/Services/Auth/AuthServices.js

import axiosInstance from "../axiosInstance";

class AuthServices {
    async signUp(body) {
        return axiosInstance.post('signup/', body);
    }

    async signIn(body) {
        return axiosInstance.post('login/', body);
    }

    async refreshAccessToken(refreshToken) {
        return axiosInstance.post('token/refresh/', { refresh: refreshToken });
    }

    async logout(refreshToken) {
        return axiosInstance.post('logout/', { refresh: refreshToken });
    }
}

const authServices = new AuthServices();

export default authServices;
