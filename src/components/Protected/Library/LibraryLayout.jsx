
import { useState } from 'react'
import { MdAddCard } from 'react-icons/md'
import { Link, Outlet, useParams } from 'react-router-dom'

const LibraryLayout = () => {
    const {library_id} = useParams()
    const [searchQuery, setSearchQuery] = useState();

    const handleData = (e)=>{
        setSearchQuery(e.target.value)
    }


  return (
    <>
        <div className='flex mb-5'>
            <Link className="flex-auto btn btn-wide mr-10 border border-gray-300" to={`/app/library/${library_id}/add-file`}> <MdAddCard/>Add File</Link>
            <div className=" flex-1 join">
                <div>
                    <div>
                    <input className="input input-bordered join-item" value={searchQuery} onChange={handleData} placeholder="Search"/>
                    </div>
                </div>
                <div className="indicator">
                    <Link className="btn join-item" to={`/app/library/${library_id}/search/${searchQuery ||undefined}`} >Search</Link>
                </div>
            </div>
        </div>

        {/* {searchResult && 
        <div>
            <p className='font-bold text-2xl'>Search Results</p>
            <SearchResultContainer searchResult={searchResult}/>
            <p className='m-5 font-bold text-2xl'>Libraries All Assets</p>
        </div>
        }    */}

        {/* here goes all content of library */}
        <Outlet/>
    </>
  )
}

export default LibraryLayout