import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const TopNavAndFooterOutlet = () => {
  return (
    <div className="">
    <div >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  </div>
  )
}

export default TopNavAndFooterOutlet