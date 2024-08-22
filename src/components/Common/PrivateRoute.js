import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../../Services/Auth/TokenService';
import authServices from '../../Services/Auth/AuthServices';

const PrivateRoute = ({ element }) => {
    const location = useLocation();
    const [authStatus, setAuthStatus] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            if (!isAuthenticated()) {
                try {
                    const tokens = JSON.parse(localStorage.getItem('tokens'));
                    await authServices.refreshAccessToken(tokens.refresh); // Try to refresh the token
                    setAuthStatus(true);
                } catch {
                    setAuthStatus(false);
                }
            } else {
                setAuthStatus(true);
            }
        };

        checkAuth();
    }, []);

    if (authStatus === null) {
        return <div>Loading...</div>; // Optionally, show a loading indicator
    }

    return authStatus ? (
        element
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
};

export default PrivateRoute;
