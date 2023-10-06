import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LibraryAssetContainer = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const {library_id} = useParams()
  const [assets, setAssets] = useState([])
  useEffect(()=>{
    axios.get(`/api/libraries/${library_id}/assets/`)
    .then((res) => {
      setAssets(res.data);
    })
  },[])

  console.log(base_url,"<<<<<<<<<<<<<<<<")
  return (
    <div className='grid grid-flow-col gap-1 w-96'>
      {
        assets.map((asset)=>(
          <div key={asset.id} className="m-2 card card-compact w-70 bg-base-100 shadow-xl">
            <figure><img src={`${asset.asset}`} alt="Shoes" /></figure>
            <div className="card-body">
              <p>{asset.title}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default LibraryAssetContainer