import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const OrgAssetsContainer = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const {org_id} = useParams()
  const [assets, setAssets] = useState([])
  useEffect(()=>{
    axios.get(`/api/library/asset/${org_id}/`)
    .then((res) => {
      console.log(res.data)
      setAssets(res.data);
    })
  },[org_id])

  return (
    <div className='flex flex-wrap'>
      {
        assets.map((asset, index)=>(
          <Link className="m-2 overflow-hidden card card-compact w-1/6 bg-base-100 shadow-xl max-h-48" key={index} to={``}>
              <figure><img src={`${base_url+asset.asset}`} alt="" /></figure>
          </Link>
        ))
      }
    </div>
  )
}

export default OrgAssetsContainer