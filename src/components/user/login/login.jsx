import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../../../services/localStorageService";

const UserLogin = () => {

    const [userData, setUserData] = useState({});
    const [serverError, setServerError] = useState({})
    const navigate = useNavigate();
    
    const handleData = (e)=>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/user/login/", userData)
        .then((res)=> {
              if(res.data){
                console.log(res.data)
                storeToken(res.data.token)
                navigate('/user/dashboard')
              }
        })
        .catch((err)=> { setServerError(err.response.data.errors)})
    }
    return (
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
          <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-center text-gray-700">Asset OptimizeX</h1>
              
              <form className="space-y-4">
                  <div>
                      <label className="label"><span className="text-base label-text">Email</span></label>
                      <input name="email" type="text" onChange={handleData} placeholder="Email Address" className="w-full input input-bordered" />
                      { serverError.email ? <small className="text-red-600">{serverError.email[0]}</small>:"" }
                  </div>
                  <div>
                      <label className="label"><span className="text-base label-text">Password</span></label>
                      <input name="password"type="password" onChange={handleData} placeholder="Enter Password"
                          className="w-full input input-bordered" />
                  </div>
                  
                  { serverError.password ? <small className="text-red-600">{serverError.password[0]}</small>:"" }
                    { serverError.non_field_errors ? <small className="text-red-600">{serverError.non_field_errors[0]}</small>:"" }
                    <br/>
                    <a href="/user/reset-password" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                  <div>
                      <button onClick={handleSubmit} className="btn btn-block">Login</button>
                  </div>
              </form>
          </div>
      </div>
    )
  }
  
  export default UserLogin