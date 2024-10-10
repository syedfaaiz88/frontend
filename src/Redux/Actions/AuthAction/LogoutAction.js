// src/Actions/AuthActions/logout.js
import { LOGOUT_SUCCESS, LOGOUT_FAIL } from "../Types";
import AuthServices from "../../../Services/Auth/AuthServices";
import { toast } from "react-toastify";

export const logout = (navigate) => async (dispatch) => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));

  if (tokens) {
    const { refresh } = tokens;

    try {
      localStorage.removeItem("user");
      localStorage.removeItem("tokens");     
      const response = await AuthServices.logout(refresh);

      if (response.data.status === true) {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        toast.success("Logged out successfully");
        navigate('/login'); // Use navigate to redirect to the login page
      } else {
        toast.error(
          response.data.message.detail
            ? response.data.message.detail
            : response.data.message
        );
        dispatch({
          type: LOGOUT_FAIL,
        });
      }
    } catch (error) {
      toast.error("Logout failed");
      dispatch({
        type: LOGOUT_FAIL,
      });
    }
  } else {
    toast.error("No active session found");
  }
};
