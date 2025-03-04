import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignupForm from "./components/Auth/SignupForm";
import LoginForm from "./components/Auth/LoginForm";
import VerifyEmail from "./components/Auth/VerifyEmail";
import PrivateRoute from "./components/Common/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Taekwondo from "./components/Fitness/Taekwondo";
import Powerlifting from "./components/Fitness/Powerlifting";
import Skills from "./components/Skills/Skills";
import UserProfile from "./components/UserProfile/UserProfile";
import Personal from "./components/Personal/Personal";
import LandingPage from "./components/LandingPage";
import Education from "./components/Education/Education";
import Timeline from "./components/Timeline/Timeline";
import Calisthenics from "./components/Fitness/Calisthenics";
import Bodybuilding from "./components/Fitness/BodyBuilding";
import Poem from "./components/Poem";
import EightBallPool from "./components/Esports/EightBallPool";
import Social from "./components/Connect/Social";
import Contact from "./components/Connect/Contact";
import Location from "./components/Connect/Location";
import "react-toastify/dist/ReactToastify.css";
import Feedback from "./components/UserProfile/Feedback";
import AccountSettingsLayout from "./components/Layout/AccountSettingsLayout";
import ChangePasswordForm from "./components/UserProfile/ChangePasswordForm";
import EditProfileDetails from "./components/UserProfile/EditProfile/EditProfileDetails";
import EditProfile from "./components/UserProfile/EditProfile/EditProfile";
import AuthenticationLayout from "./components/Layout/AuthenticationLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* Grouped Public Routes */}
          <Route path="/signup" element={<AuthenticationLayout element={<SignupForm />}/>} />
          <Route path="/login" element={<AuthenticationLayout element={<LoginForm />}/>} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/" element={<LandingPage />} />
          
          {/* Grouped Protected Routes */}
          <Route path="/personal" element={<PrivateRoute element={<Layout element={<Personal/>}/>} />} />
          <Route path="/socials" element={<PrivateRoute element={<Layout element={<Social/>}/>} />} />
          <Route path="/contact" element={<PrivateRoute element={<Layout element={<Contact/>}/>} />} />
          <Route path="/location" element={<PrivateRoute element={<Layout element={<Location/>}/>} />} />
          <Route path="/taekwondo" element={<PrivateRoute element={<Layout element={<Taekwondo/>}/>} />} />
          <Route path="/bodybuilding" element={<PrivateRoute element={<Layout element={<Bodybuilding/>}/>} />} />
          <Route path="/calisthenics" element={<PrivateRoute element={<Layout element={<Calisthenics/>}/>} />} />
          <Route path="/powerlifting" element={<PrivateRoute element={<Layout element={<Powerlifting/>}/>} />} />
          <Route path="/academics" element={<PrivateRoute element={<Layout element={<Education/>}/>} />} />
          <Route path="/skills" element={<PrivateRoute element={<Layout element={<Skills/>}/>} />} />
          <Route path="/user-profile" element={<PrivateRoute element={<AccountSettingsLayout element={<UserProfile/>}/>} />} />
          <Route path="/change-password" element={<PrivateRoute element={<AccountSettingsLayout element={<ChangePasswordForm/>}/>} />} />
          <Route path="/edit-profile-details-form" element={<PrivateRoute element={<AccountSettingsLayout element={<EditProfileDetails/>}/>} />} />
          <Route path="/edit-profile-details" element={<PrivateRoute element={<AccountSettingsLayout element={<EditProfile/>}/>} />} />
          <Route path="/give-feedback" element={<PrivateRoute element={<AccountSettingsLayout element={<Feedback/>}/>} />} />
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
