import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  const token = localStorage.getItem('token')
  return token ? <Component {...props} /> : <Navigate to="/" />;
}

export default ProtectedRoute;