import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const CreateLibrary = () => {
    const [serverError, setServerError] = useState({})
    const [serverMsg, setServerMsg] = useState("")
    const {organization_id} = useParams();
    const Navigate = useNavigate()


    const [userData, setUserData] = useState({organization:organization_id});

    const handleData = (e)=>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        
        axios.post("/api/library/create/", userData)
        .then((res)=> {
              if(res.data){
                setServerMsg("Library Created Successfully")
              }
              setTimeout(() => {
                Navigate('/app')
              }, 2000);
        })
        .catch((err)=> { setServerError(err.response.data)})
    }
    return (
        <div className="w-full relative flex flex-col items-center justify-center">
            <div className="w-full p-6 bg-white rounded-md shadow-lg border-top ">
                <div><h1 className="text-3xl font-semibold text-gray-700 mb-5">Create Library</h1></div>
                <form className="space-y-4">
                
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Library Name</span>
                        </label>
                        <input name="library_name" onChange={handleData} type="text" placeholder="Enter Library name" className="w-full input input-bordered" />
                        { serverError.library_name ? <small className="text-red-600">{serverError.library_name[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Library Description</span>
                        </label>
                        <input name="description" onChange={handleData} type="text" placeholder="Library Description" className="w-full input input-bordered" />
                        { serverError.description ? <small className="text-red-600">{serverError.description[0]}</small>:"" }
                    </div>
                    {/* <div>
                        <input value={organization_id}  name="organization" onChange={handleData} type="text" placeholder="Enter Zip Code" className="hidden w-full input input-bordered" />
                        { serverError.organization ? <small className="text-red-600">{serverError.organization[0]}</small>:"" }
                    </div> */}
                    
                    <div>
                        { serverMsg ? 
                        <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{serverMsg}.</span>
                        </div>
                        :"" }
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-block btn-primary">Create Library</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
  export default CreateLibrary