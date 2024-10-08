import { CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD_PENDING, CHANGE_PASSWORD_SUCCESS, GENDERS_FAIL, GENDERS_PENDING, GENDERS_SUCCESS, SET_MESSAGE } from "./Types"
import UserServices from "../../Services/UserServices"
import { toast } from "react-toastify"



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
                    })
                }
                else {
                    dispatch({
                        type: GENDERS_FAIL,
                    });
                    toast.error(data.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
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
                    })
                    toast.success(data.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });                    
                }
                else {
                    dispatch({
                        type: CHANGE_PASSWORD_FAIL,
                        payload: { errors: data.data.errors },
                    });
                    toast.error(data.data.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
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
            if(error)
                console.log(error);
        });
};

