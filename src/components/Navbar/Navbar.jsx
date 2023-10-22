import { Link } from "react-router-dom";
import { getToken, removeToken } from "../../services/localStorageService";
import { navbarMenu } from "./navbarItems";

const Navbar = () => {
const {access_token} =getToken();

const logout=()=> {
  removeToken();
}

  return (
    <div className="navbar text-gray-100 py-3 bg-gradient-to-r  from-purple-700 to-indigo-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navbarMenu.map((item, index) => {
              const { name, path} = item;
              return (
                <li key={index} className="border border-blue-600">
                  <Link to={`${path}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-2xl " to='/home'> 
        <span className="font-bold font-roboto text-xl bg-slate-100 p-1 border rounded-xl text-slate-500">AO<span className="text-purple-700">X</span></span>
        Asset OptimizeX</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-10">
          {navbarMenu.map((item, index) => {
            const { name, path, children } = item;
            // console.log(children);
            return (
              <li key={index} tabIndex={0}>
                {!children && <Link to={`${path}`}>{name}</Link>}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end gap-x-3 pr-5">
        {
          access_token ? <a className="btn btn-outline text-slate-100" href="/app">Your Assets</a>
          : <a className="btn btn-outline text-slate-100" href="/user/login">Log In</a>
        }
        {
          access_token ? <a onClick={logout} className="btn btn-primary" href="/home">Log Out</a>
          : <a  className="btn btn-primary" href="/user/register">Get Started</a>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
