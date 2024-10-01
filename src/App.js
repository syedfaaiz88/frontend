import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignupForm from "./components/Auth/SignupForm";
import LoginForm from "./components/Auth/LoginForm";
import VerifyEmail from "./components/Auth/VerifyEmail";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/Common/PrivateRoute";
import Layout from "./components/Layout/Layout";
import { Connect } from "./components/Connect/Connect";
import Taekwondo from "./components/Fitness/Taekwondo";
import Powerlifting from "./components/Fitness/Powerlifting";
import Skills from "./components/Skills/Skills";
import UserProfile from "./components/UserProfile";
import Personal from "./components/Personal/Personal";
import { LandingPage } from "./components/LandingPage";
import Education from "./components/Education/Education";
import Timeline from "./components/Timeline/Timeline";
import Calisthenics from "./components/Fitness/Calisthenics";
import Bodybuilding from "./components/Fitness/BodyBuilding";
import Poem from "./components/Poem";
import EightBallPool from "./components/Esports/EightBallPool";

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* Grouped Public Routes */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/" element={<LandingPage />} />
          
          {/* Grouped Protected Routes */}
          <Route path="/personal" element={<PrivateRoute element={<Layout element={<Personal/>}/>} />} />
          <Route path="/connect-with-me" element={<PrivateRoute element={<Layout element={<Connect/>}/>} />} />
          <Route path="taekwondo" element={<PrivateRoute element={<Layout element={<Taekwondo/>}/>} />} />
          <Route path="bodybuilding" element={<PrivateRoute element={<Layout element={<Bodybuilding/>}/>} />} />
          <Route path="calisthenics" element={<PrivateRoute element={<Layout element={<Calisthenics/>}/>} />} />
          <Route path="powerlifting" element={<PrivateRoute element={<Layout element={<Powerlifting/>}/>} />} />
          <Route path="/academics" element={<PrivateRoute element={<Layout element={<Education/>}/>} />} />
          <Route path="/skills" element={<PrivateRoute element={<Layout element={<Skills/>}/>} />} />
          <Route path="/user-profile" element={<PrivateRoute element={<Layout element={<UserProfile/>}/>} />} />
          <Route path="/timeline" element={<PrivateRoute element={<Layout element={<Timeline/>}/>} />} />
          <Route path="/poem" element={<PrivateRoute element={<Layout element={<Poem/>}/>} />} />
          <Route path="/8ballpool" element={<PrivateRoute element={<Layout element={<EightBallPool />} />} />} />
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
