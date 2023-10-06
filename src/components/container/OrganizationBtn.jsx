
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiFolderPlus } from 'react-icons/bi'
import { ImLibrary } from 'react-icons/im'
import { Link } from 'react-router-dom'
import LibraryBtn from './LibraryBtn'

const OrganizationBtn = ({org}) => {

    const [libraries, setLibraries] = useState([])
    useEffect(()=>{
    axios.get(`/api/library/list/${org.id}/`)
    .then((res) => {
        setLibraries(res.data);
    })
    },[])
    console.log(libraries)

  return (
    <>
        <li ><Link  to={`/app`}><ImLibrary/>{org.organization_name}</Link></li>
        <li className='ml-4'><Link  to={`/app/${org.id}/create-library`}><BiFolderPlus/>Create Library</Link></li>
        {
            libraries.map((library,index)=>(
                <LibraryBtn key={index} library={library}/>
            ))
        }
        
    </>
  )
}

export default OrganizationBtn