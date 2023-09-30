import { Link } from "react-router-dom"

const LeftSidebar = () => {
  return (
        <div className="drawer lg:drawer-open border">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li className="mb-2 font-semibold text-xl">
                <Link to={'/app/dashboard'}>Asset OptimizeX</Link> </li>

                <li ><Link className="btn btn-active" to="">Create Organization</Link></li>
                <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
  )
}

export default LeftSidebar