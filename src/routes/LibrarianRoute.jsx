import { Navigate } from "react-router-dom";

import useRole from "../hooks/useRole";

const LibrarianRoute = ({
  children,
}) => {
  const { role, roleLoading } =
    useRole();

  if (roleLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (
    role !== "librarian" &&
    role !== "admin"
  ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default LibrarianRoute;