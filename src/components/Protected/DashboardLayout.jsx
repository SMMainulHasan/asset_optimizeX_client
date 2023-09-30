import LeftSidebar from "../container/LeftSidebar"
import DashboardRightSide from "./DashboardRightSide"

const DashboardLayout = () => {
  return (
    <div className="flex items-start">
      <div >
        <LeftSidebar/>
      </div>
      <div className="flex-auto">
      <DashboardRightSide/>
      </div>
    </div>
  )
}

export default DashboardLayout