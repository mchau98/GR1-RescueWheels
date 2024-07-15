import Home from "../pages/home";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import MainLayout from "../../components/main_layout";
import Register from "../pages/register";
import LayoutLogin from "../../components/layout_login";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import Navbar from "../../components/navbar";
import SettingAccount from "../pages/account";
import Services from "../pages/services";
import Sidebar from "../../components/sidebar";
import UsedService from "../pages/used-services";
import ServiceDetail from "../pages/servicedetail";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/home" element={<LayoutLogin component={<Home />} />} />
      <Route path="/" element={<MainLayout component={<Landing />} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/update-info"
        element={<LayoutLogin component={<SettingAccount />} />}
      />
      {/* <Route
        path="/services"
        element={<LayoutLogin component={<Services />} />}
      /> */}
      <Route
        path="/used-services"
        element={<LayoutLogin component={<UsedService />} />}
      />
      {/* <Route
        path="/detail-service"
        element={<LayoutLogin component={<ServiceDetail />} />}
      /> */}
      <Route
        path="/services"
        exact
        element={<LayoutLogin component={<Services />} />}
      />
      <Route
        path="/services/:id"
        element={<LayoutLogin component={<ServiceDetail />} />}
      />
    </Routes>
  );
}

export default AllRoutes;
