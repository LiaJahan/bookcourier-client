import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";

import AllBooks from "../pages/Books/AllBooks";
import BookDetails from "../pages/Books/BookDetails";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import MyProfile from "../pages/Dashboard/User/MyProfile";
import MyOrders from "../pages/Dashboard/User/MyOrders";
import Wishlist from "../pages/Dashboard/User/Wishlist";
import Invoices from "../pages/Dashboard/User/Invoices";

import AddBook from "../pages/Dashboard/Librarian/AddBook";
import MyBooks from "../pages/Dashboard/Librarian/MyBooks";
import Orders from "../pages/Dashboard/Librarian/Orders";
import EditBook from "../pages/Dashboard/Librarian/EditBook";

import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import ManageBooks from "../pages/Dashboard/Admin/ManageBooks";

import ErrorPage from "../pages/Error/ErrorPage";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import LibrarianRoute from "./LibrarianRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
        loader: async ({ params }) =>
          fetch(
            `http://localhost:5000/books/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      // User Routes
      {
        index: true,
        element: <MyProfile />,
      },
      
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },

      // Librarian Routes

      {
        path: "add-book",
        element: (
          <LibrarianRoute>
            <AddBook />
          </LibrarianRoute>
        ),
      },

      {
        path: "my-books",
        element: (
          <LibrarianRoute>
            <MyBooks />
          </LibrarianRoute>
        ),
      },

      {
        path: "edit-book/:id",
        element: (
          <LibrarianRoute>
            <EditBook />
          </LibrarianRoute>
        ),
        loader: async ({ params }) =>
          fetch(
            `http://localhost:5000/books/${params.id}`
          ),
      },

      {
        path: "orders",
        element: (
          <LibrarianRoute>
            <Orders />
          </LibrarianRoute>
        ),
      },

      // Admin Routes

      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },

      {
        path: "manage-books",
        element: (
          <AdminRoute>
            <ManageBooks />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;