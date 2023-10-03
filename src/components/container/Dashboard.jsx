import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      {/* Here gose all of dashboard content */}
      <div className="bg-base-300 min-h-full min-w-full p-5 " >
        <Outlet/>
      </div>


    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 min-h-full text-base-content">
        {/* Sidebar content here */}
        <li><Link to={"/app/create-org"}>Create Organization</Link></li>
        <li><Link to={"/app/create-org"}>Organization</Link></li>
      </ul>
    
    </div>
  </div>
  )
}

export default Dashboard