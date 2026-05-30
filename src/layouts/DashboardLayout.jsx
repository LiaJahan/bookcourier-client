import { Link, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="dashboard-drawer"
        type="checkbox"
        className="drawer-toggle"
      />

      <div className="drawer-content">
        <div className="p-4 lg:hidden">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary"
          >
            Open Menu
          </label>
        </div>

        <div className="p-6">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

          <li className="mb-4">
            <h2 className="text-2xl font-bold">
              Dashboard
            </h2>
          </li>

          {role === "user" && (
            <>
              <li>
                <Link to="/dashboard/my-profile">
                  My Profile
                </Link>
              </li>

              <li>
                <Link to="/dashboard/my-orders">
                  My Orders
                </Link>
              </li>

              <li>
                <Link to="/dashboard/wishlist">
                  Wishlist
                </Link>
              </li>

              <li>
                <Link to="/dashboard/invoices">
                  Invoices
                </Link>
              </li>
            </>
          )}

          {role === "librarian" && (
            <>
              <li>
                <Link to="/dashboard/add-book">
                  Add Book
                </Link>
              </li>

              <li>
                <Link to="/dashboard/my-books">
                  My Books
                </Link>
              </li>

              <li>
                <Link to="/dashboard/orders">
                  Orders
                </Link>
              </li>
            </>
          )}

          {role === "admin" && (
            <>
              <li>
                <Link to="/dashboard/all-users">
                  All Users
                </Link>
              </li>

              <li>
                <Link to="/dashboard/manage-books">
                  Manage Books
                </Link>
              </li>

              <li>
                <Link to="/dashboard/my-profile">
                  My Profile
                </Link>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li>
            <Link to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;