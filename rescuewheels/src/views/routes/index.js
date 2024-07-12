import Home from "../pages/home";
import { Navigate, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import MainLayout from "../../components/main_layout";
import Register from "../pages/register";
import LayoutLogin from "../../components/layout_login";
import Login from "../pages/login";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<MainLayout component={<Landing />} />} />
      <Route
        path="/register"
        element={<LayoutLogin component={<Register />} />}
      />
      <Route path="/login" element={<LayoutLogin component={<Login />} />} />
    </Routes>
  );
}

export default AllRoutes;
