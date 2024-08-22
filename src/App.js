import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignupForm from "./components/Auth/SignupForm";
import LoginForm from "./components/Auth/LoginForm";
import VerifyEmail from "./components/Auth/VerifyEmail";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/Common/PrivateRoute";
import { Home } from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* Grouped Public Routes */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          
          {/* Grouped Protected Routes */}
          <Route path="/dashboard" element={<PrivateRoute element={<Home />} />} />

        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
