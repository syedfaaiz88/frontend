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
        return (
            <div className="flex h-screen w-screen bg-gray-200 p-4 gap-4">
                <div className="w-1/12 bg-gray-300 animate-pulse"></div>
                <div className="flex-1 flex flex-col">
                    <div className="h-16 bg-gray-300 animate-pulse mb-4"></div>
                    <div className="flex-1 bg-gray-300 animate-pulse"></div>
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
