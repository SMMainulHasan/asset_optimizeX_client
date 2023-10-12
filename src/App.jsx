import { Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
import axios from "axios";
import Home from "./components/Home/Home/Home";
import CreateOrganization from "./components/Organization/CreateOrganization";
import OrganizationEmailVerify from "./components/Organization/OrganizationEmailVerify";
import CreateLibrary from "./components/Protected/CreateLibrary";
import DashboardLayout from "./components/Protected/DashboardLayout";
import AddFile from "./components/Protected/Library/AddFile";
import AssetDetails from "./components/Protected/Library/AssetDetails";
import LibraryAssetContainer from "./components/Protected/Library/LibraryAssetContainer";
import LibraryLayout from "./components/Protected/Library/LibraryLayout";
import ProfileDetail from "./components/Protected/ProfileDetail";
import PrivateOutlet from "./components/container/PrivateOutlet";
import TopNavAndFooterOutlet from "./components/container/TopNavAndFooterOutlet";
import ForgotPass from "./components/user/ForgotPass/ForgotPass";
import ForgotResetPass from "./components/user/ForgotResetPass/ForgotResetPass";
import UserLogin from "./components/user/login/login";
import UserRegister from "./components/user/register/UserRegister";
import { getToken } from "./services/localStorageService";

function App() {
  
const {access_token} = getToken();
axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;
// axios.defaults.baseURL="https://asset.pythonanywhere.com/";
if(access_token !== null){
   axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
}

  return (
    <>
      <Routes>

        <Route path="/*" element={<TopNavAndFooterOutlet />}>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />}/>
          <Route path="user/login" element={<UserLogin />}/>
          <Route path="user/register" element={<UserRegister/>}/>
          <Route path="user/forgot-pass" element={<ForgotPass/>}/>
          <Route path="api/user/reset/:uid/:user_matching_query" element={<ForgotResetPass/>}/>
          <Route path="api/organization/register/:uid/:user_matching_query/:hash" element={<OrganizationEmailVerify/>}/>
        </Route>

        
        

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="app" element={<DashboardLayout title="Dashboard" />}>
            <Route path="Profile" element={<ProfileDetail/> }/>
            <Route path="create-org" element={<CreateOrganization/> }/>
            <Route path=":organization_id/create-library" element={<CreateLibrary/> }/>
            <Route path=":library_id" element={<LibraryLayout/> }>
              <Route path="" element={<LibraryAssetContainer/> }/>
              <Route path="add-file" element={<AddFile/> }/>
              <Route path="asset-details/:assetId" element={<AssetDetails/> }/>
            </Route>
          </Route>
        </Route>
        {/* <Route path="*" element={<Navigate to={access_token ? "/app/dashboard" : "/user/login"} replace />}/> */}
      </Routes>
    </>
  )
}

export default App
