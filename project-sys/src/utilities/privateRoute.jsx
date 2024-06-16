import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Adjust this to match your state shape

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
