import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <p>Laddar..</p>;
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
