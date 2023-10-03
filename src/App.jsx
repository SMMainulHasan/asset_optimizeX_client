import { Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
import axios from "axios";
import Home from "./components/Home/Home/Home";
import CreateOrg from "./components/Protected/CreateOrg";
import DashboardLayout from "./components/Protected/DashboardLayout";
import ProfileDetail from "./components/Protected/ProfileDetail";
import PrivateOutlet from "./components/container/PrivateOutlet";
import ForgotPass from "./components/user/ForgotPass/ForgotPass";
import ForgotResetPass from "./components/user/ForgotResetPass/ForgotResetPass";
import UserLogin from "./components/user/login/login";
import UserRegister from "./components/user/register/UserRegister";
import { getToken } from "./services/localStorageService";

function App() {
  
const {access_token} = getToken();
console.log(access_token)
axios.defaults.baseURL="http://127.0.0.1:8000/"
if(access_token !== null){
   axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
}

  return (
    <>
      {/* { !access_token && <Navbar/>} */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/user/login" element={<UserLogin />}/>
        <Route path="/user/register" element={<UserRegister/>}/>
        <Route path="/user/forgot-pass" element={<ForgotPass/>}/>
        <Route path="/api/user/reset/:uid/:user_matching_query" element={<ForgotResetPass/>}/>
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="app" element={<DashboardLayout title="Dashboard" />}>
            <Route path="Profile" element={<ProfileDetail/> }/>
            <Route path="create-org" element={<CreateOrg/> }/>
          </Route>
        </Route>
        {/* <Route path="*" element={<Navigate to={access_token ? "/app/dashboard" : "/user/login"} replace />}/> */}
      </Routes>
    </>
  )
}

export default App
