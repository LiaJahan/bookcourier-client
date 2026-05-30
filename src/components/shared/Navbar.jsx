import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/books">Books</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>

    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* Mobile Menu */}
        <div className="navbar-start">

          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <FaBookOpen className="text-emerald-500" />
            <span>BookCourier</span>
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          {/* Theme Toggle Placeholder */}
          <button className="btn btn-ghost btn-sm">
            🌙
          </button>

          {!user ? (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-sm"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary btn-sm"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL}
                    alt="user"
                  />
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-error btn-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;