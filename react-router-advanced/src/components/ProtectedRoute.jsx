import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = false; // change to true for testing

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}
