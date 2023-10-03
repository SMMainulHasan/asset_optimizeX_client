import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDetail = () => {
    const [userData, setUserData] = useState({});
    const [serverError, setServerError] = useState({})
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("/api/user/profile/")
        .then((res) => {
            setUserData(res.data);
        })
    },[])
    console.log(userData)

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
            <div className="w-full h-full  p-6 bg-white rounded-md shadow-lg border-top ">
                <h1 className="text-3xl font-semibold text-gray-700 mb-5 ">Profile Edit</h1>
                <form className="space-y-4">
                
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input name="name" value={userData.name} onChange={handleData} type="text" placeholder="Enter Your Name" className="w-full input input-bordered" />
                        { serverError.name ? <small className="text-red-600">{serverError.name[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input name="email" disabled value={userData.email} onChange={handleData} type="email" placeholder="Email Address" className="w-full input input-bordered" />
                        { serverError.email ? <small className="text-red-600">{serverError.email[0]}</small>:"" }
                        
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Phone Number</span>
                        </label>
                        <input name="phone_number" value={userData.phone_number} onChange={handleData} type="text" placeholder="Phone" className="w-full input input-bordered" />
                        { serverError.phone_number ? <small className="text-red-600">{serverError.phone_number[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Upload Profile Photo</span>
                        </label>
                        <input name="image" onChange={handleData} type="file" placeholder="Upload Image" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="align-left w-auto btn btn-block btn-primary">Save Your Change</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
  export default ProfileDetail