import Home from "../pages/home";
import { Navigate, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import MainLayout from "../../components/main_layout";
import Register from "../pages/register";
import LayoutLogin from "../../components/layout_login";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import Navbar from "../../components/navbar";
import { Switch } from "antd";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/home" element={<MainLayout component={<Home />} />} />
      <Route path="/" element={<MainLayout component={<Landing />} />} />
      <Route
        path="/register"
        element={<LayoutLogin component={<Register />} />}
      />
      <Route path="/login" element={<LayoutLogin component={<Login />} />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default AllRoutes;
