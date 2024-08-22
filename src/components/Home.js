// src/components/Dashboard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Actions/AuthAction/LogoutAction';

export const Home = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <div>Home</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};
