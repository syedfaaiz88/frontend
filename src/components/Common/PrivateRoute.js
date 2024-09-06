import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PrivateRoute = ({ element }) => {
  const location = useLocation();
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      if (!localStorage.getItem("user") && !localStorage.getItem("tokens")) {
        setAuthStatus(false);
      } else {
        setAuthStatus(true);
      }
    };

    checkAuth();
  }, []);

  if (authStatus === null) {
    return (
      <div className="flex flex-col md:flex-row h-screen w-screen p-4 gap-4">
        <div className="w-full md:w-1/12">
          <Skeleton className="h-24 md:h-full" />
        </div>
        <div className="flex-1 flex flex-col">
          <Skeleton className="h-10 mb-4" />
          <Skeleton className="flex-1" />
        </div>
      </div>
    );
  }

  return authStatus ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
