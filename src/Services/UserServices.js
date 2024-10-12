import axios from "axios";
import axiosInstance from "./axiosInstance";

// Base URL for your API
const API_URL = "http://127.0.0.1:8000/api/";

class UserServices {
  async getGenders() {
    return axios.get(API_URL + "genders/");
  }
  async changePassword(body) {
    return axiosInstance.post(API_URL + "change-password/", body);
  }
  async editProfileDetails(body) {
    return axiosInstance.post(API_URL + "edit-profile-details/", body);
  }
  async getProfileDetails() {
    return axiosInstance.get(API_URL + "get-profile-details/");
  }
  async editProfilePicture(body) {
    return axiosInstance.post(API_URL + "edit-profile-picture/", body, {
      headers: {
          'Content-Type': 'multipart/form-data',
      },
  });
  }
  async isUsernameAvailable(body) {
    return axiosInstance.post(API_URL + "is-username-available/", body);
  }
}

const userServicesInstance = new UserServices();

export default userServicesInstance;
