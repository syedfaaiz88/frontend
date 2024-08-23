import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignupForm from "./components/Auth/SignupForm";
import LoginForm from "./components/Auth/LoginForm";
import VerifyEmail from "./components/Auth/VerifyEmail";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/Common/PrivateRoute";
import { Portfolio } from "./components/Portfolio";
import Layout from "./components/Layout/Layout";
import { Social } from "./components/Social";
import { Fitness } from "./components/Fitness";
import { Education } from "./components/Education";

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
          <Route path="/portfolio" element={<PrivateRoute element={<Layout element={<Portfolio/>}/>} />} />
          <Route path="/social" element={<PrivateRoute element={<Layout element={<Social/>}/>} />} />
          <Route path="/fitness" element={<PrivateRoute element={<Layout element={<Fitness/>}/>} />} />
          <Route path="/education" element={<PrivateRoute element={<Layout element={<Education/>}/>} />} />

        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
