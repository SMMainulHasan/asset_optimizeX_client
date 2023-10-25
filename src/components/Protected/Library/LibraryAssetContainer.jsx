import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const LibraryAssetContainer = () => {
  const {library_id} = useParams();
  const [assets, setAssets] = useState([]);

  const [fileType, setFileType]=useState();

  useEffect(()=>{
    axios.get(`/api/libraries/${library_id}/assets/`)
    .then((res) => {
      setAssets(res.data);
    })
  },[library_id])

  
  //Get file extension
  const getFileExtension = (url) =>{
    const extension = url.split(".").pop();
    return extension;
  }

  return (
    // <div className='grid grid-flow-col gap-1 w-full'>
    <div className='flex flex-wrap'>
      {
        assets.map((asset)=>(
          <Link className="m-2 overflow-hidden card card-compact w-1/6 bg-base-100 shadow-xl h-48" 
          key={asset.id} to={`asset-details/${asset.id}`}>
              <div className=''>
                <div className='h-36'>
                  {
                    getFileExtension(asset.asset) == "pdf" ?
                    <p className='text-center items-center text-4xl text-red-400'>Pdf</p>
                    : <figure><img src={`${asset.asset}`} alt="" /></figure>
                  }
                </div>
                <div className="card-body">
                  <p className='font-semibold'>{asset.title}</p>
                </div>
              </div>
          </Link>
        ))
      }
    </div>
  )
}

export default LibraryAssetContainer