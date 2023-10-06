
import { BsFillFolderFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const LibraryBtn = ({library}) => {
  // const [library_id]=useParams()

  return (
    <>
        <li className='ml-5'><Link  to={`/app/${library.id}`}><BsFillFolderFill/>{library.library_name}</Link></li>
    </>
  )
}

export default LibraryBtn