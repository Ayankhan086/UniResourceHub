import { Navigate } from "react-router-dom";
import { useAuthUserStore } from "../store/authUserStore";

const ProtectedRoute = ({ children }) => {

  const { user } = useAuthUserStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;