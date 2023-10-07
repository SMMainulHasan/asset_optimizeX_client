
import axios from "axios";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { RiShareFill } from "react-icons/ri";
import { useNavigate, useParams } from 'react-router-dom';

const AssetDetails = () => {

const {library_id,assetId} = useParams()
const [assetData, setAssetData] = useState({library:library_id});
const [assetFile, setAssetFile] = useState();
const [serverError, setServerError] = useState({})
const navigate = useNavigate();

const handleData = (e)=>{
    setAssetData({...assetData, [e.target.name]:e.target.value})
}
const handleAsset = (e)=>{
    setAssetFile(e.target.files[0])
}

const handleSubmit = (e)=> {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', assetData.title);
    formData.append('library', assetData.library);
    formData.append('asset', assetFile);
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

// get asset

    const base_url = import.meta.env.VITE_BASE_URL;
    const [asset, setAsset] = useState({})
    useEffect(()=>{
        // axios.get(`/api/libraries/${library_id}/assets/`)
        axios.get(`/api/assets/${assetId}/`)
        .then((res) => {
            setAsset(res.data);
        })
    },[])


  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-5">
        <div className="w-full p-6 bg-white rounded-md shadow-lg border-top flex ">
            {/*asset details right side start*/}
            <div className="w-3/5 ">
                <div className="relative">
                    <img src={`${asset.asset}`} />
                    <div className="bg-gray-900 p-3 rounded-3xl bg-opacity-60 absolute text-2xl text-gray-100 top-5 right-5 flex">
                        <RiShareFill className="mx-3"/>
                        <FaDownload className="mx-3"/>
                        <RiShareFill className="mx-3"/>
                    </div>
                </div>
            </div>


            {/*asset details left side start*/}
            <div className="w-2/5 rounded-md shadow-xl">
                <div className="w-full p-6 bg-white rounded-md shadow-lg border-top ">
                    <form className="space-y-4">
                        <div>
                            <label className="label"><span className="text-base label-text">Title</span></label>
                            <input name="title" onChange={handleData} value={asset.title} type="text" placeholder="Enter Title Here" className="w-full input input-bordered input-sm" />
                            { serverError.title ? <small className="text-red-600">{serverError.title[0]}</small>:"" }
                        </div>
                        <div>
                            <p className="text-gray-500">Created: 24 july,2000</p>
                            <p className="text-gray-500">Last Updated: 24 july,2000</p>
                        </div>
                        <div>
                            <label className="label"><span className="text-base label-text">Upload Updated file</span></label>
                            <input name="asset" onChange={handleAsset} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs input-md" />
            
                            { serverError.asset ? <small className="text-red-600">{serverError.asset[0]}</small>:"" }
                        </div>
                        <div>
                            <label className="label"><span className="text-base label-text">Location</span></label>
                            <input name="location" onChange={handleData} value={asset.location}type="text" placeholder="Enter Title Here" className="w-full input input-bordered input-sm" />
                            { serverError.location ? <small className="text-red-600">{serverError.location[0]}</small>:"" }
                        </div>
                        <div>
                            <label className="label"><span className="text-base label-text">Tags</span></label>
                            <input name="location" onChange={handleData} value={asset.tags} type="text" placeholder="Enter Tag Here" className="w-full input input-bordered input-sm" />
                            { serverError.tags ? <small className="text-red-600">{serverError.tags[0]}</small>:"" }
                        </div>
                        <div>
                            { serverError.non_field_errors ? <div className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{serverError.non_field_errors[0]}.</span>
                            </div>:"" }
                        </div>
                        <div>
                            <button onClick={handleSubmit}  className="btn btn-block btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssetDetails