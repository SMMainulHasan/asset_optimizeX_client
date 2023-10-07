
import { BsFillFolderFill, BsPersonFillAdd } from 'react-icons/bs'
import { CgRename } from 'react-icons/cg'
import { FaAngleRight } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const LibraryBtn = ({library}) => {
  // const [library_id]=useParams()

  return (
    <>
        <li className='ml-5'>
          <Link className='flex flex-row place-content-between py-0'  to={`/app/${library.id}`}>
            <div className='flex items-center'>
              <FaAngleRight className='mr-3'/>
              <BsFillFolderFill className='mr-3'/>
              {library.library_name}
            </div>
            <div className="dropdown dropdown-end dropdown-hover h-12 pt-0">
              <label tabIndex={0} className="btn btn-ghost">
                <Link to={""}><SlOptionsVertical/></Link>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52 border border-gray-300">
                <li><Link to={""}><CgRename/>Rename</Link></li>
                <li><Link to={""}><BsPersonFillAdd/>Add User</Link></li>
                <li><Link to="" className='text-red-500'><MdDelete/>Delete</Link></li>
              </ul>
            </div>
          </Link>
        </li>
    </>
  )
}

export default LibraryBtn