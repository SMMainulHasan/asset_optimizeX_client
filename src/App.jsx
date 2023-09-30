import { Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
import axios from "axios";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Navbar/Navbar";
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

// axios.get("/api/user/profile/")
// .then((res) => {
//   console.log(res)
// })
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/user/login" element={<UserLogin />}/>
        <Route path="/user/register" element={<UserRegister/>}/>
        <Route path="/user/forgot-pass" element={<ForgotPass/>}/>
        <Route path="/api/user/reset/:uid/:user_matching_query" element={<ForgotResetPass/>}/>
        {/* <Route path="/posts/" element={<Posts />} /> */}
        {/* <Route path="/posts/:postId" element={<Post />} /> */}
      </Routes>
    </>
  )
}

export default App
