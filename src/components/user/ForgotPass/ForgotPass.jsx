
import axios from "axios";
import { useState } from "react";

const ForgotPass = () => {

const [userData, setUserData] = useState({});
const [serverError, setServerError] = useState({})
const [serverMsg, setServerMsg] = useState("")
const [badRequestError, setBadRequestError] = useState("")

const handleData = (e)=>{
    setUserData({...userData, [e.target.name]:e.target.value})
}

const handleSubmit = (e)=> {
    e.preventDefault();
    
    axios.post(`/api/user/send-reset-password-email/`, userData)
    .then((res)=> {
        console.log(res)
          if(res.data){
            setServerMsg(res.data.msg)
          }
    })
    .catch((err)=> { 
      console.log(err)
      if(err.code == "ERR_BAD_RESPONSE"){
        setBadRequestError("This email don't have an account")
      }
      else{
        setServerError(err.response.data.errors)}
      }
      )
}

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden mt-5
    ">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Asset OptimizeX</h1>
            <form className="space-y-4">
                <div>
                      <label className="label"><span className="text-base label-text">Email</span></label>
                      <input name="email" type="text" onChange={handleData} placeholder="Email Address" className="w-full input input-bordered" />
                      { serverError.email ? <small className="text-red-600">{serverError.email[0]}</small>:"" }
                      { serverError.non_field_errors ? <small className="text-red-600">{serverError.non_field_errors[0]}</small>:"" }
                      { badRequestError ? <small className="text-red-600">{badRequestError}</small>:"" }

                </div>
                <div>
                  { serverMsg ? <p className="text-green-600">{serverMsg}</p>:"" }
                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-block">Forgot Pass</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ForgotPass;