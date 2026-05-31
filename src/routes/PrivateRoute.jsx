import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({
  children,
}) => {
  const { user, loading } =
    useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate to="/login" />
    );
  }

  return children;
};

export default PrivateRoute;