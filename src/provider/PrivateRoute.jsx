import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  // If user is available then return children
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;

  //   Else redirect to Login page
};

export default PrivateRoute;
