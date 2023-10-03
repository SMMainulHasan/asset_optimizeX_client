import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateOrg = () => {
    const [userData, setUserData] = useState({});
    const [serverError, setServerError] = useState({})
    const navigate = useNavigate();
    
    const handleData = (e)=>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        
        axios.post("/api/user/register/", userData)
        .then((res)=> {
              if(res.data){
                console.log(res.data)
                navigate('/app/dashboard')
              }
        })
        .catch((err)=> { setServerError(err.response.data.errors)})
    }
    return (
        <div className="w-full relative flex flex-col items-center justify-center h-screen overflow-hidden ">
            <div className="w-full p-6 bg-white rounded-md shadow-lg border-top ">
                <div><h1 className="text-3xl font-semibold text-gray-700 mb-5">Create Organization</h1></div>
                <form className="space-y-4">
                
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Organization Name</span>
                        </label>
                        <input name="name" onChange={handleData} type="text" placeholder="Enter Your Name" className="w-full input input-bordered" />
                        { serverError.name ? <small className="text-red-600">{serverError.name[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Organization Description</span>
                        </label>
                        <input name="name" onChange={handleData} type="text" placeholder="Enter Your Name" className="w-full input input-bordered" />
                        { serverError.name ? <small className="text-red-600">{serverError.name[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Country</span>
                        </label>
                        <input name="name" onChange={handleData} type="text" placeholder="Enter Your Name" className="w-full input input-bordered" />
                        { serverError.name ? <small className="text-red-600">{serverError.name[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Zip Code</span>
                        </label>
                        <input name="name" onChange={handleData} type="text" placeholder="Enter Your Name" className="w-full input input-bordered" />
                        { serverError.name ? <small className="text-red-600">{serverError.name[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Phone Number</span>
                        </label>
                        <input name="phone_number" onChange={handleData} type="text" placeholder="Phone" className="w-full input input-bordered" />
                        { serverError.phone_number ? <small className="text-red-600">{serverError.phone_number[0]}</small>:"" }
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-block btn-primary">Create Organization</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
  export default CreateOrg