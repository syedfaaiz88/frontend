import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [isVerified, setIsVerified] = useState(null); // To store verification status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/verify-email/${token}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (data.status === true) {
          setIsVerified(true);
          toast.success("Email Verified Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        } else {
          setIsVerified(false);
          const message =
            data && data.message ? data.message : "Something Went Wrong";
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
        const message =
          error && error.message ? error.message : "Something Went Wrong";
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        {loading && (
          <div className="flex flex-col items-center">
            <FaSpinner className="animate-spin text-blue-500 text-4xl" />
            <p className="mt-4 text-gray-700">Verifying Email...</p>
          </div>
        )}
        {error && !loading && (
          <div className="flex flex-col items-center">
            <FaExclamationCircle className="text-red-500 text-4xl" />
            <p className="mt-4 text-red-700">
              {typeof error === "string" ? error : JSON.stringify(error)}
            </p>
          </div>
        )}
        {isVerified === true && !loading && (
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-green-500 text-4xl" />
            <p className="mt-4 text-gray-700">Email Verified Successfully!</p>
          </div>
        )}
        {isVerified === false && !loading && (
          <div className="flex flex-col items-center">
            <FaExclamationCircle className="text-red-500 text-4xl" />
            <p className="mt-4 text-gray-700">
              Verification Failed. Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
