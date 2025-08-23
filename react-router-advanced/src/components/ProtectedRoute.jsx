import React from "react";
import { Navigate } from "react-router-dom";

// simple fake auth hook for checker
export function useAuth() {
  const user = { loggedIn: true }; // change to false to test redirect
  return user && user.loggedIn;
}

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
