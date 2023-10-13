import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchResultContainer  = () => {
  const {library_id, search_query} = useParams();
  const [searchResult, setSearchResult] = useState();
  useEffect(()=>{
      axios.get(`/api/libraries/${library_id}/assets/?search=${search_query}`)
      .then((res)=> {
        setSearchResult(res.data)
        console.log(res.data);
        })
  },[search_query])

  return (
    <div className='flex flex-wrap'>
      {
        searchResult && searchResult.map((asset)=>(
          <Link className="m-2 overflow-hidden card card-compact w-1/6 bg-base-100 shadow-xl max-h-48" 
          key={asset.id} to={`asset-details/${asset.id}`}>
              <figure><img src={`${asset.asset}`} alt="" /></figure>
              <div className="card-body">
                <p className='font-semibold'>{asset.title}</p>
              </div>
          </Link>
        ))
      }
    </div>
  )
}

export default SearchResultContainer 