import axios from 'axios';
import axiosInstance from './axiosInstance';

// Base URL for your API
const API_URL = 'http://127.0.0.1:8000/api/';


class UserServices {
    async getGenders() {
        return axios.get(API_URL + "genders/");
    }
    async changePassword(body) {
        return axiosInstance.post(API_URL + "change-password/", body);
    }
}


const userServicesInstance = new UserServices();

export default userServicesInstance;