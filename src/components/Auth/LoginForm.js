import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../Redux/Actions/AuthAction/SignInAction';
import { useNavigate } from 'react-router-dom';
import InputField from '../UI/InputField';
import Button from '../UI/Button';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(credentials));
    };

    const signInStatus = useSelector((state) => state.signin_reducer.signIn);
    const isLoading = useSelector((state) => state.signin_reducer.isLoading);
    useEffect(() => {
        signInStatus && !isLoading && signInStatus.status === true && navigate("/");

    }, [signInStatus, navigate, isLoading]);

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
            <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                Icon={<FaEnvelope />}
            />
            <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                Icon={<FaLock />}
            />
            <Button
                type="submit"
                isLoading={isLoading}
            >
                Login
            </Button>
        </form>
    );
    
};

export default LoginForm;
