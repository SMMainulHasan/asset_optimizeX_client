
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const AddFile = () => {

const {library_id} = useParams()
const [assetData, setAssetData] = useState({library:library_id});
const [asset, setAsset] = useState();
const [serverError, setServerError] = useState({})
const navigate = useNavigate();

const handleData = (e)=>{
    setAssetData({...assetData, [e.target.name]:e.target.value})
}
const handleAsset = (e)=>{
    setAsset(e.target.files[0])
}

const handleSubmit = (e)=> {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', assetData.title);
    formData.append('library', assetData.library);
    formData.append('asset', asset);
    formData.append('location', assetData.location);

    axios.post("/api/assets/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    .then((res)=> {
          if(res.data){
            console.log(res.data)
            navigate(`/app/${library_id}/`)
          }
    })
    .catch((err)=> { setServerError(err.response.data)})
}

  return (
    <div className="relative flex flex-col items-center justify-center m-5 mb-5">
        <div className="w-full p-6 bg-white rounded-md shadow-lg border-top ">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Asset OptimizeX</h1>
            <form className="space-y-4">
                
                <div>
                    <label className="label"><span className="text-base label-text">Title</span></label>
                    <input name="title" onChange={handleData} type="text" placeholder="Enter Title Here" className="w-full input input-bordered" />
                    { serverError.title ? <small className="text-red-600">{serverError.title[0]}</small>:"" }
                </div>
                <div>
                    <input name="asset" onChange={handleAsset} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
    
                    { serverError.asset ? <small className="text-red-600">{serverError.asset[0]}</small>:"" }
                </div>
                <div>
                    <label className="label"><span className="text-base label-text">Location</span></label>
                    <input name="location" onChange={handleData} type="text" placeholder="Enter Title Here" className="w-full input input-bordered" />
                    { serverError.location ? <small className="text-red-600">{serverError.location[0]}</small>:"" }
                </div>
                
                
                <div>
                    { serverError.non_field_errors ? <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{serverError.non_field_errors[0]}.</span>
                    </div>:"" }
                </div>
                <div>
                    <button onClick={handleSubmit}  className="btn btn-block btn-primary">Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddFile