import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Layout = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default Layout;
