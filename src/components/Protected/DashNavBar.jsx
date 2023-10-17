import axios from "axios";
import { useContext, useEffect } from "react";
import { FiLogOut } from 'react-icons/fi';
import { GrUserSettings } from 'react-icons/gr';
import { PiPasswordFill } from 'react-icons/pi';
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { removeToken } from "../../services/localStorageService";

const DashNavBar = () => {
    const [user,setUser] = useContext(UserContext);
    const base_url = import.meta.env.VITE_BASE_URL;

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
    <div className="navbar   bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl" href="/home" >Asset OptimizeX</a>
  </div>
  <div className="flex-none gap-2">
  <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <div className="dropdown dropdown-end dropdown-hover">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src= {`${base_url}/${user.image}`} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to={"/app/profile"}><GrUserSettings/>{user.name}</Link></li>
        <li><Link to={"/app/profile/change-pass"}><PiPasswordFill/>Change Your Password</Link></li>
        <li><Link onClick={logout} className="text-red-500" to="/home"><FiLogOut/>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default DashNavBar