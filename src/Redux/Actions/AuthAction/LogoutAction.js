// src/Actions/AuthActions/logout.js
import { LOGOUT_SUCCESS, LOGOUT_FAIL } from "../Types";
import AuthServices from "../../../Services/Auth/AuthServices";
import { toast } from "react-toastify";

export const logout = () => async (dispatch) => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));

  if (tokens) {
    const { refresh } = tokens;

    try {
        console.log(refresh)
      const response = await AuthServices.logout(refresh); // Call logout API
      if (response.data.status === true) {
        localStorage.removeItem("user"); // Clear user data from localStorage
        localStorage.removeItem("tokens"); // Clear tokens from localStorage
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        toast.success("Logged out successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.href = '/login'; // Adjust the URL based on your routing setup
      } else {
        toast.error(
          response.data.message.detail
            ? response.data.message.detail
            : response.data.message,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        dispatch({
          type: LOGOUT_FAIL,
        });
      }
    } catch (error) {
      toast.error("Logout failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({
        type: LOGOUT_FAIL,
      });
    }
  } else {
    toast.error("No active session found", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
