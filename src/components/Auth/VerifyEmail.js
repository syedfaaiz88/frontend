import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [isVerified, setIsVerified] = useState(null); // To store verification status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/verify-email/${token}`, {
                    method: 'GET',
                });
                const data = await response.json();
                if (data.status === true) {
                    setIsVerified(true);
                    toast.success('Email Verified Successfully!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        navigate('/login');
                    }, 5000);

                } else {
                    setIsVerified(false);
                    const message = data && data.message ? data.message : 'Something Went Wrong';
                    toast.error(message, {
                        position: "top-right",
                        autoClose: 3000,
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
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setError(message);
                setIsVerified(false);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, [token, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{typeof error === 'string' ? error : JSON.stringify(error)}</div>; // Render error as string
    }

    return <div>{isVerified ? 'Email Verified' : 'Verifying Email...'}</div>
};

export default VerifyEmail;
