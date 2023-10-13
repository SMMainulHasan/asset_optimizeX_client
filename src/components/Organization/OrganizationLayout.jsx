
import { Outlet } from 'react-router-dom'

const OrganizationLayout = () => {
//   const {library_id} = useParams()

  


  return (
    <>
        <div className='flex mb-5'>
            {/* <Link className="flex-auto btn btn-wide mr-10 border border-gray-300" to={`/app/library/${library_id}/add-file`}> <MdAddCard/>Add File</Link> */}
            <div className=" flex-1 join">
                <div>
                    <div>
                    <input className="input input-bordered join-item" placeholder="Search"/>
                    </div>
                </div>
                {/* <select className="select select-bordered join-item">
                    <option disabled selected>Filter</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select> */}
                <div className="indicator">
                    <button className="btn join-item" to={"/app/library_name"}>Search</button>
                </div>
            </div>
        </div>

        {/* here goes all content of library */}
        <Outlet/>
    </>
  )
}

export default OrganizationLayout