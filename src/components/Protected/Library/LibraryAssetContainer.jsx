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

  const isImgExtension =(extension)=>{
    const imgExt = ["png", "jpg", "webp", "jpeg", "gif", "png", "apng", "svg", "bmp", "bmp", "ico"];
    if (imgExt.indexOf(extension) != -1){
      return true;
    }
    return false;
  }

  return (
    <div className='flex flex-wrap'>
      {
        assets.map((asset)=>(
          <Link className="m-2 overflow-hidden card card-compact w-1/6 bg-base-100 shadow-xl h-48" key={asset.id} to={`asset-details/${asset.id}`}>
              <div className="overflow-hidden card card-compact bg-base-100 ">
                <div className='h-36 flex items-center justify-center'>
                  {
                    isImgExtension(getFileExtension(asset.asset)) ?
                    <figure><img src={`${asset.asset}`} alt="" /></figure>
                    : <p className='text-center items-center text-4xl text-purple-400'>.{getFileExtension(asset.asset)}</p>
                  }
                </div>
                <div className="card-body bg-base-100">
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