import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const OrgJoinWithCode = () => {
    const [serverError, setServerError] = useState({});
    const [serverMsg, setServerMsg] = useState("");
    const Navigate = useNavigate();


    const [orgData, setOrgData] = useState();

    const handleData = (e)=>{
        setOrgData({...orgData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        
        
        axios.post(`/api/organization/code/`, orgData)
        .then((res)=> {
              if(res.data){
                setServerMsg("Organization Name changed Successfully")
              }
            //   setTimeout(() => {
            //     Navigate(`/app/org/${org_id}`)
            //     window.location.reload(true);
            //   }, 1000);
        })
        .catch((err)=> {setServerError(err.response.data.errors)})
    }
    return (
        <div className="w-full relative flex flex-col items-center justify-center">
            <div className="w-full p-6 bg-white rounded-md shadow-lg border-top min-h-screen">
                <div><h1 className="text-3xl font-semibold text-gray-700 mb-5">Join Organization With Invite Code</h1></div> <hr />
                <form className="space-y-4">
                
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Organization Name:</span>
                        </label>
                        <input name="organization_name" onChange={handleData} type="text" placeholder="Enter Organization name" className="w-full input input-bordered" />
                        { serverError.organization_name ? <small className="text-red-600">{serverError.organization_name[0]}</small>:"" }
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Invite Code:</span>
                        </label>
                        <input name="invited_code" onChange={handleData} type="text" placeholder="Enter Organization Invite Code" className="w-full input input-bordered" />
                        { serverError.organization_name ? <small className="text-red-600">{serverError.organization_name[0]}</small>:"" }
                    </div>
                    
                    
                    <div>
                        { serverMsg && 
                        <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{serverMsg}.</span>
                        </div>}
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-block btn-primary bg-gradient-to-r from-purple-700 to-indigo-500">Join Organization As Viewer</button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
  export default OrgJoinWithCode