import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { removeToken } from "../../services/localStorageService"

const DashNavBar = () => {
    const [user, setUser] = useState({})

useEffect(()=>{
    axios.get("/api/user/profile/")
    .then((res) => {
        setUser(res.data);
    })
},[])

const logout=()=> {
    removeToken();
    
}

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" href="/home" >Asset OptimizeX</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <p>{user.name}</p>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.email} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to={"/app/profile"}>Profile Detail</Link></li>
        <li><Link onClick={logout} to="/home">Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default DashNavBar