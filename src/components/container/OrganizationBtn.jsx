
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiFolderPlus } from 'react-icons/bi'
import { BsPersonFillAdd } from 'react-icons/bs'
import { CgRename } from 'react-icons/cg'
import { FaInstalod } from 'react-icons/fa'
import { IoMdOptions } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import LibraryBtn from './LibraryBtn'

const OrganizationBtn = ({org}) => {
    const [libraries, setLibraries] = useState([])
    useEffect(()=>{
    axios.get(`/api/library/list/${org.id}/`)
    .then((res) => {
        setLibraries(res.data);
    })
    },[])

  return (
    <>
        <li >
            <NavLink className='flex flex-row place-content-between py-0'  to={`/app/org/${org.id}`}>
                <div className='flex items-center font-semibold'>
                    <FaInstalod className='mr-3'/>
                    {org.organization_name}
                </div>
                <div className="dropdown dropdown-end dropdown-hover h-12 pt-0">
                    <label tabIndex={0} className="btn btn-ghost">
                        <Link to={`/app/org/${org.id}`}><IoMdOptions/></Link>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52 border border-gray-300">
                        <li><Link to={""}><CgRename/>Rename</Link></li>
                        <li><Link to={`/app/org/${org.id}/${org.organization_name}/add-member`}><BsPersonFillAdd/>Add Member</Link></li>
                        <li><Link to="" className='text-red-500'><MdDelete/>Delete</Link></li>
                    </ul>
                </div>
            </NavLink>
        </li>
        <li className='ml-4'>
            <Link to={`/app/org/${org.id}/create-library`}><BiFolderPlus/>Create Library</Link>
        </li>
        {
            libraries.map((library,index)=>(
                <LibraryBtn key={index} library={library}/>
            ))
        }
        
    </>
  )
}

export default OrganizationBtn