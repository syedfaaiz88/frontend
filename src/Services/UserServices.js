import axios from 'axios';

// Base URL for your API
const API_URL = 'http://127.0.0.1:8000/api/';


class UserServices {
    async getGenders() {
        return axios.get(API_URL + "genders/");
    }
}


const userServicesInstance = new UserServices();

export default userServicesInstance;