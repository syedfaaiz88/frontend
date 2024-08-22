import { SIGNIN_FAIL, SIGNIN_PENDING, SIGNIN_SUCCESS } from "../Types"
import AuthServices from "../../../Services/Auth/AuthServices"
import { toast } from "react-toastify"



export const signIn = (body) => async (dispatch) => {
    dispatch({
        type: SIGNIN_PENDING,
    });
    try {
        const data = await AuthServices.signIn(body)
        if (data && data.data.status === true && data.data.hasResult) {
            localStorage.setItem('user', JSON.stringify(data.data.result.user));
            localStorage.setItem('tokens', JSON.stringify(data.data.result.tokens));
            dispatch({
                type: SIGNIN_SUCCESS,
                payload: { signIn: data.data },
            })
            toast.success("Logged in Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (data && data.data.status === true && !data.data.hasResult) {
            dispatch({
                type: SIGNIN_FAIL,
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
                type: SIGNIN_FAIL,
            });
            toast.error(data && data.data.message, {
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
            type: SIGNIN_FAIL,
        });
    }
};