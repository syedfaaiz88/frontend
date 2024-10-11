import {
  EDIT_PROFILE_DETAILS_FAIL,
  EDIT_PROFILE_DETAILS_PENDING,
  EDIT_PROFILE_DETAILS_SUCCESS,
  EDIT_PROFILE_PICTURE_FAIL,
  EDIT_PROFILE_PICTURE_PENDING,
  EDIT_PROFILE_PICTURE_SUCCESS,
  GET_PROFILE_DETAILS_FAIL,
  GET_PROFILE_DETAILS_PENDING,
  GET_PROFILE_DETAILS_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_PENDING,
  CHANGE_PASSWORD_SUCCESS,
  GENDERS_FAIL,
  GENDERS_PENDING,
  GENDERS_SUCCESS,
  SET_MESSAGE,
} from "./Types";
import UserServices from "../../Services/UserServices";
import { toast } from "react-toastify";

export const getGenders = () => async (dispatch) => {
  dispatch({
    type: GENDERS_PENDING,
    payload: { getGenders: "isLoading" },
  });
  return await UserServices.getGenders()
    .then(
      (data) => {
        if (data.data.status === true) {
          dispatch({
            type: GENDERS_SUCCESS,
            payload: { getGenders: data.data },
          });
        } else {
          dispatch({
            type: GENDERS_FAIL,
          });
          toast.error(data.data.message);
        }
        return Promise.resolve();
      },
      (error) => {
        console.log("error ", error);
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: GENDERS_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export const changePassword = (body) => async (dispatch) => {
  dispatch({
    type: CHANGE_PASSWORD_PENDING,
    payload: { changePassword: "isLoading" },
  });
  return await UserServices.changePassword(body)
    .then(
      (data) => {
        if (data.data.status === true) {
          dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: { changePassword: data.data },
          });
          toast.success(data.data.message);
        } else {
          dispatch({
            type: CHANGE_PASSWORD_FAIL,
            payload: { errors: data.data.errors },
          });
          toast.error(data.data.message);
        }
        return Promise.resolve();
      },
      (error) => {
        console.log("error ", error);
        dispatch({
          type: CHANGE_PASSWORD_FAIL,
        });
        return Promise.reject();
      }
    )
    .catch((error) => {
      if (error) console.log(error);
    });
};

export const editProfileDetails = (body) => async (dispatch) => {
  dispatch({
    type: EDIT_PROFILE_DETAILS_PENDING,
    payload: { isLoading: true },
  });
  return await UserServices.editProfileDetails(body)
    .then(
      (data) => {
        if (data.data.status === true) {
          dispatch({
            type: EDIT_PROFILE_DETAILS_SUCCESS,
            payload: { editProfileDetails: data.data },
          });
          dispatch(getProfileDetails());
          toast.success(data.data.message);
        } else {
          dispatch({
            type: EDIT_PROFILE_DETAILS_FAIL,
            payload: { errors: data.data.errors },
          });
          toast.error(data.data.message);
        }
        return Promise.resolve();
      },
      (error) => {
        console.log("error ", error);
        dispatch({
          type: EDIT_PROFILE_DETAILS_FAIL,
        });
        return Promise.reject();
      }
    )
    .catch((error) => {
      if (error) console.log(error);
    });
};

export const getProfileDetails = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE_DETAILS_PENDING,
    payload: { isLoading: true },
  });
  return await UserServices.getProfileDetails()
    .then(
      (data) => {
        if (data.data.status === true) {
          dispatch({
            type: GET_PROFILE_DETAILS_SUCCESS,
            payload: { getProfileDetails: data.data },
          });
          localStorage.setItem("user", JSON.stringify(data.data.result));
          // toast.success(data.data.message);
        } else {
          dispatch({
            type: GET_PROFILE_DETAILS_FAIL,
            payload: { errors: data.data.errors },
          });
          toast.error(data.data.message);
        }
        return Promise.resolve();
      },
      (error) => {
        console.log("error ", error);
        dispatch({
          type: GET_PROFILE_DETAILS_FAIL,
        });
        return Promise.reject();
      }
    )
    .catch((error) => {
      if (error) console.log(error);
    });
};

export const editProfilePicture = (body) => async (dispatch) => {
  dispatch({
    type: EDIT_PROFILE_PICTURE_PENDING,
    payload: { isLoading: true },
  });
  return await UserServices.editProfilePicture(body)
    .then(
      (data) => {
        if (data.data.status === true) {
          dispatch({
            type: EDIT_PROFILE_PICTURE_SUCCESS,
            payload: { editProfilePicture: data.data },
          });
          dispatch(getProfileDetails());
          toast.success(data.data.message);
        } else {
          dispatch({
            type: EDIT_PROFILE_PICTURE_FAIL,
            payload: { errors: data.data.errors },
          });
          toast.error(data.data.message);
        }
        return Promise.resolve();
      },
      (error) => {
        console.log("error ", error);
        dispatch({
          type: EDIT_PROFILE_PICTURE_FAIL,
        });
        return Promise.reject();
      }
    )
    .catch((error) => {
      if (error) console.log(error);
    });
};