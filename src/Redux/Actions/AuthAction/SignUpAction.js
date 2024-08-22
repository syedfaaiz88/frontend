import { SIGNUP_FAIL, SIGNUP_PENDING, SIGNUP_SUCCESS, RESET_SIGNUP_STATE } from "../Types";
import AuthService from "../../../Services/Auth/AuthServices";
import { toast } from "react-toastify";

export const signUp = (body) => async (dispatch) => {
    dispatch({
        type: SIGNUP_PENDING,
    });

    try {
        const data = await AuthService.signUp(body);

        if (data.data.status === true) {
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: data.data,
            });
            toast.success(data.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            dispatch({
                type: SIGNUP_FAIL,
                payload: { errors: data.data.errors },
            });
            toast.error(data.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    } catch (error) {
        const message = error && error.message ? error.message : 'Something Went Wrong';
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch({
            type: SIGNUP_FAIL,
            payload: { errors: error.message ? error.message : null },
        });
    }
};

export const resetSignupState = () => ({
    type: RESET_SIGNUP_STATE,
});
