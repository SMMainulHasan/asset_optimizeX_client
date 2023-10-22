import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const OrgAssetsContainer = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const {org_id} = useParams()
  const [assets, setAssets] = useState()
  const [totalAsset, setTotalAsset] = useState()

  useEffect(()=>{
    
    axios.get(`/api/library/asset/${org_id}/`)
    .then((res) => {
      setAssets(res.data.asset);
      setTotalAsset(res.data.len[0].total_img);
    })
  },[org_id])

  return (
    <>
    <div className='flex'>
        <h1 className="mb-4 flex-auto w-1/5 mr-5 text-center bg-base-100 p-3 ps-5 text-slate-500 font-semibold border rounded-full">Total Assets <span className='bg-slate-300 p-1 border rounded-full'>{totalAsset}</span></h1>

    <div className=" flex-1 join">
        <div>
            <div>
            <input className="input input-bordered join-item" value={''} onChange={'handleData'} placeholder="Search"/>
            </div>
        </div>
        <div className="indicator ">
            <Link className="btn join-item bg-gradient-to-r from-purple-700 to-indigo-500" 
            to={``} >Search</Link>
            {/* to={`/app/org/${org_id}/library/${library_id}/search/${searchQuery ||undefined}`} >Search</Link> */}
        </div>
    </div>
    </div>

    <div className='flex flex-wrap'>
      {
        assets?.map((asset)=>(
          <Link className="m-2 overflow-hidden card card-compact w-1/6 bg-base-100 shadow-xl max-h-48" 
          key={asset.id} to={``}>
              <figure><img src={`${base_url+asset.asset}`} alt="" /></figure>
          </Link>
        ))
      }
    </div>
    </>
  )
}

export default OrgAssetsContainer