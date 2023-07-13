import { useAuth } from "../contexts/Auth-context";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user?.isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
}
