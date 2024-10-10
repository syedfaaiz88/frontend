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
            toast.success("Logged in Successfully");
        }
        else if (data && data.data.status === true && !data.data.hasResult) {
            dispatch({
                type: SIGNIN_FAIL,
            });
            toast.success(data.data.message);

        } else {
            dispatch({
                type: SIGNIN_FAIL,
            });
            toast.error(data && data.data.message);
        }
    } catch (error) {
        const message = error && error.message ? error.message : 'Something Went Wrong';
        toast.error(message);
        dispatch({
            type: SIGNIN_FAIL,
        });
    }
};