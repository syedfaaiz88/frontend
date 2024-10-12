import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUsernameAvailable } from "../Redux/Actions/UserActions";

const useUsernameAvailability = (username) => {
  const dispatch = useDispatch();
  const [availabilityMessage, setAvailabilityMessage] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);
  
  const isLoadingUsername = useSelector(
    (state) => state.is_username_available_reducer.isLoading
  );
  const isUsernameAvailableData = useSelector(
    (state) => state.is_username_available_reducer.isUsernameAvailable
  );
  const isUsernameAvailableErrors = useSelector(
    (state) => state.is_username_available_reducer.errors
  );

  useEffect(() => {
    if (username) {
      setShowLoader(true);
      dispatch(isUsernameAvailable({ username }));
    }
  }, [username, dispatch]);

  useEffect(() => {
    if (!isLoadingUsername) {
      if (isUsernameAvailableData?.result?.user_name_availbility) {
        setDisabled(false)
        setAvailabilityMessage({
          status: "available",
          message: "✓ Username available",
        });
      } else {
        setDisabled(true)
        setAvailabilityMessage({
          status: "unavailable",
          message: "✗ Username not available",
        });
      }
      if (isUsernameAvailableErrors?.username) {
        setDisabled(true)
        setAvailabilityMessage({
          status: "error",
          message: isUsernameAvailableErrors.username,
        });
      }
      setShowLoader(false);
    }
  }, [isLoadingUsername, isUsernameAvailableData, isUsernameAvailableErrors]);

  return {
    availabilityMessage,
    showLoader,
    disabled
  };
};

export default useUsernameAvailability;
