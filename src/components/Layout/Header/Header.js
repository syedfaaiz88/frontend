import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
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

  const renderUnauthenticatedUserLinks = () => (
    <div className="flex space-x-4">
      <Link to="/signup" className="text-lg text-gray-100 hover:text-blue-500">
        Sign Up
      </Link>
      <Link to="/login" className="text-lg text-gray-100 hover:text-blue-500">
        Login
      </Link>
    </div>
  );

  return (
    <header className="bg-gray-700 py-2 text-xl px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-semibold text-white">
            Syed Faaiz
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          {authStatus
            ? <HeaderLinks />
            : renderUnauthenticatedUserLinks()}
        </div>
      </div>
    </header>
  );
};

export default Header;
